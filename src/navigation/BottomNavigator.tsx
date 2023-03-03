//@ts-nocheck
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import colors from '../constants/colors';
import icons from '../constants/icons';
import routes from '../routes';
import Markets from '../screens/Markets';
import News from '../screens/News';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import bottomNavigatorStyle from '../styles/bottomNavigator';
import {TBottomTabsNavigator} from '../types/BottomTabNavigator';
import WatchListStack from './WatchListStack';

const Tab = createBottomTabNavigator<TBottomTabsNavigator>();

const BottomNavigator = () => {
  const customOptions = (iconName: ImageSourcePropType) => {
    return {
      headerShown: false,
      tabBarIcon: ({focused}: any) =>
        focused ? (
          <View style={styles.individualTabWrapper}>
            <Image style={styles.iconStyle} source={iconName} />
          </View>
        ) : (
          <Image style={styles.iconStyle} source={iconName} />
        ),
    };
  };

  return (
    <Tab.Navigator screenOptions={bottomNavigatorStyle}>
      <Tab.Screen
        name={'Markets'}
        component={Markets}
        options={customOptions(icons.MARKET)}
      />
      <Tab.Screen
        name={routes.Watchlist}
        component={WatchListStack}
        options={customOptions(icons.SAVE)}
      />
      <Tab.Screen
        name={'Notifications'}
        component={Notifications}
        options={customOptions(icons.BELL)}
      />
      <Tab.Screen
        name={'News'}
        component={News}
        options={customOptions(icons.NEWS)}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={customOptions(icons.SETTING)}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    height: 20,
    width: 20,
    tintColor: colors.BLACK,
  },
  individualTabWrapper: {
    borderTopWidth: 2,
    width: '70%',
    height: '100%',
    borderColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomNavigator;
