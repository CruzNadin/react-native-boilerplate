import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screens from './data';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const ProfileStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      {screens.map(({name, component, title}, index) => (
        <Stack.Screen
          options={{title: t(title)}}
          key={index}
          name={name}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ProfileStack;
