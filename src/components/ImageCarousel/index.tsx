import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

import React from 'react';

const ImageCarousel = ({images}: {images: [string]}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: width - 20}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
      <View style={styles.dot} />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  image: {
    height: 300,
    resizeMode: 'contain',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
