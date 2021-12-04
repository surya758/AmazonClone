import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import AddressScreen from './src/screens/AddressScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigations/index';
import ProductScreen from './src/screens/ProductScreen';
import React from 'react';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
