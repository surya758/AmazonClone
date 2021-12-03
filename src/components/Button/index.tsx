import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: object;
}

const Button = ({text, onPress, containerStyle}: ButtonProps) => {
  return (
    <Pressable style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e47911',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#a15e1b',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
});

export default Button;
