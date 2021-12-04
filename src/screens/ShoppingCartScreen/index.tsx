/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View} from 'react-native';

import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import React from 'react';
import ScreenNames from '../../utils/ScreenNames';
import products from '../../data/cart';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const total = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.quantity * product.item.price,
    0,
  );
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate(ScreenNames.address);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.priceTextStyle}>
        Subtotal ({products.length} Items): $
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
        data={products}
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
