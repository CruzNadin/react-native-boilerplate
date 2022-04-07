import React from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Navigation from '@/navigation';
import {Provider} from 'react-redux';
import {store} from '@/store';
import '@/utils/i18n';

function App() {
  const scheme = useColorScheme();

  /* unfortunately we are waiting for lottie update :( */
  LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);
  /* unfortunately we are waiting for lottie update :( */

  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
