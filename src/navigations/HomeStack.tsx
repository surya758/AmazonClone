import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Navigation = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default Navigation;
