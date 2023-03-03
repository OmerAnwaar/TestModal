import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '3%',
    gap: 10,
  },
});

export default styles;
