import CartStackNav from './CartStackNav';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import HomeStackNav from './HomeStackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#f99000',
        tabBarInactiveTintColor: '#a37724',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNav}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStackNav}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="cart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShoppingCartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
