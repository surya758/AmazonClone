import 'react-native-gesture-handler';

import {StatusBar, View, useColorScheme} from 'react-native';

import Amplify from 'aws-amplify';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigations/index';
import React from 'react';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </View>
  );
};

export default withAuthenticator(App);
