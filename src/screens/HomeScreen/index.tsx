import {FlatList, StyleSheet, View} from 'react-native';

import ProductItem from '../../components/ProductItem';
import React from 'react';
import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  return (
    <View style={styles.page}>
      {/*Render Product Component*/}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  separator: {
    marginBottom: 5,
  },
});
