import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ScreenNames from '../utils/ScreenNames';
import {createStackNavigator} from '@react-navigation/stack';

interface HeaderProp {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderProp) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};
const Stack = createStackNavigator();

const HomeStackNav = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name={ScreenNames.home}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen name={ScreenNames.product} component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;

const styles = StyleSheet.create({
  root: {backgroundColor: '#23bdc5'},
  searchContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#298a91e8',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
  },
  input: {
    margin: 7,
    padding: 5,
  },
  icon: {marginLeft: 10},
});
