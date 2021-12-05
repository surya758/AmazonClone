import {StyleSheet, View} from 'react-native';

import {Auth} from 'aws-amplify';
import Button from '../../components/Button';
import React from 'react';

const ProfileScreen = () => {
  const signOutHandler = async () => {
    await Auth.signOut();
  };
  return (
    <View style={styles.root}>
      <Button text={'Sign out'} onPress={signOutHandler} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1,
  },
});
