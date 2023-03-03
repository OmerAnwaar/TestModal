import React, {useState} from 'react';
import {View, Text} from 'react-native';
import colors from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {IStocks} from '../../interfaces';
import TCheckBox from '../TCheckBox';

const Symbol = ({title, subTitle}: IStocks) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleToggle = () => {
    setToggleCheckBox(prevState => !prevState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons name={'equal'} size={24} color={colors.GREY} />
        <TCheckBox value={toggleCheckBox} onChange={handleToggle} />
      </View>
      <View style={{padding: 5, paddingHorizontal: 10}}>
        <Text style={{color: colors.BLACK}}>{title}</Text>
        <Text style={{color: colors.GREY, paddingTop: 5}}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Symbol;
