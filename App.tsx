import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from './src/constants/colors';

import StackNavigation from './src/navigation/StackNavigator';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.mainContainer} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          translucent={true}
        />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  mainContainer: {
    backgroundColor: colors.BLUE,
  },
});
