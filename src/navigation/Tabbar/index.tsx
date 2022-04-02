import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from './data';
import {AppIcon} from '@/components/common';
import {IconTypes} from '@/utils';

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator>
      {screens.map(({name, component, icon}, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={component}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <AppIcon
                type={IconTypes.ionicon}
                size={20}
                name={icon}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabbar;
