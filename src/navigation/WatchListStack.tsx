import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from '../routes';
import UpdateSymbol from '../screens/UpdateSymbol';
import Watchlist from '../screens/Watchlist';

const Stack = createNativeStackNavigator();

const WatchListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.WatchlistStack} component={Watchlist} />
      <Stack.Screen name={routes.UpdateSymbol} component={UpdateSymbol} />
    </Stack.Navigator>
  );
};

export default WatchListStack;
