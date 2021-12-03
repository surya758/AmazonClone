import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: 'normal',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default styles;
