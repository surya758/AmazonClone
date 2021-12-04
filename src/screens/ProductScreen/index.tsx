import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';

import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {Picker} from '@react-native-picker/picker';
import QuantitySlector from '../../components/QuantitySelector';
import product from '../../data/product';
import styles from '../ProductScreen/styles';
import {useRoute} from '@react-navigation/native';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* image carousel */}
      <ImageCarousel images={product.images} />

      {/* options selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}
        itemStyle={styles.new}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={product.id} />
        ))}
      </Picker>
      {/* price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      {/* description */}
      <Text>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySlector quantity={quantity} setQuantity={setQuantity} />

      {/* buttons */}
      <Button
        text={'Add to Cart'}
        onPress={() => {
          console.warn('Add to card!');
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now!');
        }}
        containerStyle={{backgroundColor: '#e3c905'}}
      />
    </ScrollView>
  );
};

export default ProductScreen;
