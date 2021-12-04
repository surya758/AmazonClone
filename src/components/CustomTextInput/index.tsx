import {StyleSheet, Text, TextInput, View} from 'react-native';

import React from 'react';

interface textProps {
  header: string;
  value: string;
  setValue: (value: string) => void;
}
const CustomTextInput = (props: textProps) => {
  const {header, value, setValue} = props;
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.textInput}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 2.5,
  },
});
