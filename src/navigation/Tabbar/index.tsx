import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from './data';

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator>
      {screens.map(({name, component}, index) => (
        <Tab.Screen key={index} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default Tabbar;
