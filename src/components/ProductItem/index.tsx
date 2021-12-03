import {Image, Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from '../ProductItem/styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const {item} = props;
  return (
    <View>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                name={
                  i < Math.floor(item.avgRating)
                    ? 'star'
                    : i + 0.5 < item.avgRating
                    ? 'star-half-full'
                    : 'star-o'
                }
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text> {item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
