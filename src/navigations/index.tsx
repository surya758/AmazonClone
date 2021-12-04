import BottomTabNav from './BottomTabNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Navigation = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Bottom" component={BottomTabNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
