import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

// import {Picker} from '@react-native-picker/picker';
import QuantitySlector from '../../components/QuantitySelector';
import product from '../../data/product';
import styles from '../ProductScreen/styles';

const ProductScreen = () => {
  // const [selectedOption, setSelectedOption] = useState(
  //   product.options ? product.options[0] : null,
  // );
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView style={styles.root}>
      {/* title */}
      <Text>{product.title}</Text>

      {/* image carousel */}

      {/* options selector */}
      {/* <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={product.id} />
        ))}
      </Picker> */}
      {/* description */}
      <Text>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySlector quantity={quantity} setQuantity={setQuantity} />

      {/* buttons */}
    </ScrollView>
  );
};

export default ProductScreen;
