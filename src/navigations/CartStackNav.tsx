import AddressScreen from '../screens/AddressScreen';
import React from 'react';
import ScreenNames from '../utils/ScreenNames';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import {createStackNavigator} from '@react-navigation/stack';

const CartStackNav = () => {
  const CartStack = createStackNavigator();

  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name={ScreenNames.cart}
        component={ShoppingCartScreen}
        options={{title: 'Cart'}}
      />
      <CartStack.Screen
        name={ScreenNames.address}
        component={AddressScreen}
        options={{title: 'Address'}}
      />
    </CartStack.Navigator>
  );
};

export default CartStackNav;
