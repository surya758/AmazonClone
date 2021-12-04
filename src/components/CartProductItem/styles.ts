import {StyleSheet} from 'react-native';
import colors from 'res/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  root: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: colors.background,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 5,
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
  quantityContainer: {
    paddingLeft: 10,
    padding: 5,
  },
});

export default styles;
