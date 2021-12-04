import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProductScreen from '../screens/ProductScreen';
import React from 'react';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default Navigation;
