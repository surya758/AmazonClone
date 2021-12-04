import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import React from 'react';
import ScreenNames from '../utils/ScreenNames';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStackNav = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={ScreenNames.home} component={HomeScreen} />
      <HomeStack.Screen name={ScreenNames.product} component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
