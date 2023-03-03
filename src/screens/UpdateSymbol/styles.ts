import {Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: '5%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  pencilContainer: {
    flexDirection: 'row',
    width: '22%',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {color: colors.DARK_TEXT},

  disclaimerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  checkboxStyles: {
    width: Platform.OS === 'android' ? 28 : 17,
    height: Platform.OS === 'android' ? 28 : 17,
    marginEnd: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {width: '48%', backgroundColor: colors.RED, borderWidth: 0},
});

export default styles;
