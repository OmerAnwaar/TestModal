import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    margin: '1.5%',
    width: 170,
  },
  logoContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  priceContainer: {
    backgroundColor: colors.LIME,
    padding: 5,
    width: '55%',
    alignSelf: 'flex-start',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
