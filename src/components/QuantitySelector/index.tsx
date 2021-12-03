import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const QuantitySlector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(1, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 35,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySlector;
