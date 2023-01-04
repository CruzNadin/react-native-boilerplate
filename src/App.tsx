import Navigation from '@/navigation';
import {store} from '@/store';
import '@/utils/i18n';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
function App() {
  const scheme = useColorScheme();

  /* unfortunately we are waiting for lottie update :( */
  LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);
  /* unfortunately we are waiting for lottie update :( */

  useEffect(() => {
    // Startup configuration
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
