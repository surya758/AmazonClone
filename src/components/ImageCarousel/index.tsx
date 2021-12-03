import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';

const ImageCarousel = ({images}: {images: [string]}) => {
  const {width} = useWindowDimensions();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentImageIndex(viewableItems[0].index || 0);
    }
  }, []);
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
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
          minimumViewTime: 300,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((el, i) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: i === currentImageIndex ? 'grey' : null},
            ]}
            key={i}
          />
        ))}
      </View>
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
    margin: 3,
  },
  dots: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
