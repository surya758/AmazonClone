import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector/index';
import styles from '../CartProductItem/styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    product: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, product} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>{product.title}</Text>
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                name={
                  i < Math.floor(product.avgRating)
                    ? 'star'
                    : i + 0.5 < product.avgRating
                    ? 'star-half-full'
                    : 'star-o'
                }
                size={18}
                color={'#e47911'}
                key={i}
                style={{paddingHorizontal: 1}}
              />
            ))}
            <Text> {product.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from $ {product.price.toFixed(2)}
            {product.oldPrice && (
              <Text style={styles.oldPrice}>
                {' '}
                $ {product.oldPrice.toFixed(2)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
