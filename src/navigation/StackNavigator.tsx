import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from '../routes';

import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name={routes.MainTabs} component={BottomNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
