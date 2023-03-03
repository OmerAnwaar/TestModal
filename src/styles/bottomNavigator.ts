import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import colors from '../constants/colors';

const bottomNavigatorStyle: BottomTabNavigationOptions = {
  tabBarActiveBackgroundColor: colors.WHITE,
  tabBarActiveTintColor: colors.BLACK,
  tabBarInactiveTintColor: colors.INACTIVE_TAB_BAR,
  tabBarAllowFontScaling: true,
  headerStyle: {
    backgroundColor: colors.WHITE,
  },
};

export default bottomNavigatorStyle;
