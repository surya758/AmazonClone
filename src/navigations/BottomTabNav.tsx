import CartStackNav from './CartStackNav';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import HomeStackNav from './HomeStackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#f99000',
        tabBarInactiveTintColor: '#edc982',
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
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={24} />
          ),
          headerShown: true,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
