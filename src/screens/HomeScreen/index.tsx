import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {DataStore} from 'aws-amplify';
import {Product} from '../../models';
import ProductItem from '../../components/ProductItem';
import styles from './styles';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);

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
