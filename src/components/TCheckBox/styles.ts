import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  checkboxStyles: {
    width: Platform.OS === 'android' ? 28 : 17,
    height: Platform.OS === 'android' ? 28 : 17,
    marginEnd: 5,
  },
});
export default styles;
