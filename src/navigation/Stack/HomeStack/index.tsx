import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screens from './data';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {screens.map(({name, component}, index) => (
        <Stack.Screen
          options={{title: 'Home Screen'}}
          key={index}
          name={name}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
