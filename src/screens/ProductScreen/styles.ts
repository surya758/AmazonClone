import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  new: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  root: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: 'normal',
    fontSize: 12,
  },
});

export default styles;
