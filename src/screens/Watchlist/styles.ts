import {StyleSheet} from 'react-native';
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
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {color: colors.DARK_TEXT},
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.BLACK,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '3%',
    gap: 10,
  },
  disclaimerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
  },
});

export default styles;
