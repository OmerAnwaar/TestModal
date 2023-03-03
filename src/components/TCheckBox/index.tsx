import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

interface ICheckBox {
  onChange: any;
  value: any;
  disabled?: boolean;
}

const TCheckBox = ({value = true, disabled = false, onChange}: ICheckBox) => {
  return (
    <CheckBox
      disabled={disabled}
      value={value}
      boxType={'square'}
      style={styles.checkboxStyles}
      tintColor={colors.BLUE}
      onCheckColor={colors.BLUE}
      onTintColor={colors.BLUE}
      onFillColor={colors.BLUE}
      onCheckColor={colors.WHITE}
      style={styles.checkboxStyles}
      onValueChange={onChange}
    />
  );
};

export default TCheckBox;
