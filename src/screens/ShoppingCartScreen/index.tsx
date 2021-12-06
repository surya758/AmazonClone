/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {CartProduct, Product} from '../../models';
import React, {useEffect, useState} from 'react';

import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import ScreenNames from '../../utils/ScreenNames';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(CartProduct, cp =>
      cp.userSub('eq', userData.attributes.sub),
    ).then(setCartProducts);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      //assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p?.id === cartProduct.productID),
        })),
      );
    };

    fetchProducts();
  }, [cartProducts]);

  console.log(cartProducts);

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate(ScreenNames.address);
  };

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }

  const total = cartProducts.reduce(
    (summedPrice, cartProduct) =>
      summedPrice +
      (cartProduct?.product?.price || 0) * (cartProduct.quantity || 0),
    0,
  );

  return (
    <View style={styles.root}>
      <Text style={styles.priceTextStyle}>
        Subtotal ({cartProducts.length} Items): $
        <Text style={{fontSize: 16, color: 'red'}}>{total.toFixed(2)}</Text>
      </Text>
      <View style={styles.buttonStyle}>
        <Button
          text={'Proceed to checkout'}
          onPress={pressHandler}
          containerStyle={{borderColor: 'yellow'}}
        />
      </View>
      <FlatList
        data={cartProducts}
        renderItem={({item}) => {
          return <CartProductItem cartItem={item} />;
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
