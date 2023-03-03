import * as React from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import colors from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface IButton {
  title: string;
  iconColor?: string;
  iconName?: string | any;
  leftIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const TButton: React.FC<IButton> = ({
  title,
  iconName,
  style,
  textStyle,
  onPress,
  iconColor = colors.BLACK,
  leftIcon = false,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, style]}>
      {leftIcon && <AntDesign name={iconName} size={24} color={iconColor} />}
      <Text style={[{color: colors.BLACK}, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default TButton;
