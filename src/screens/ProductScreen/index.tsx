import {ActivityIndicator, ScrollView, Text} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {CartProduct, Product} from '../../models';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {Picker} from '@react-native-picker/picker';
import QuantitySlector from '../../components/QuantitySelector';
import styles from '../ProductScreen/styles';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.option) {
      setSelectedOption(product.option[0]);
    }
  }, [product]);

  const onAddToCartHandler = async () => {
    const user = await Auth.currentAuthenticatedUser();

    if (!product || !user) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: user.attributes.sub,
      quantity: quantity,
      option: selectedOption,
      productID: product.id,
    });

    await DataStore.save(newCartProduct);
    navigation.navigate('CartStack');
  };

  if (!product) {
    return <ActivityIndicator />;
  }
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
        {product.option.map(option => (
          <Picker.Item label={option} value={option} key={product.id} />
        ))}
      </Picker>
      {/* price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
      {/* description */}
      <Text>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySlector quantity={quantity} setQuantity={setQuantity} />

      {/* buttons */}
      <Button text={'Add to Cart'} onPress={onAddToCartHandler} />
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
