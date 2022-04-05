import React from 'react';
import {useColorScheme} from 'react-native';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Navigation from '@/navigation';
import {Provider} from 'react-redux';
import {store} from '@/store';

function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
