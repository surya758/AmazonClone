/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View} from 'react-native';

import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import React from 'react';
import products from '../../data/cart';
import styles from './styles';

const ShoppingCartScreen = () => {
  const total = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.quantity * product.item.price,
    0,
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
