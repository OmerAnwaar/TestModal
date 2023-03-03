import * as React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import {IStocks} from '../../interfaces';
import styles from './styles';

const StockContainer = ({title, subTitle, stock_price, value}: IStocks) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View>
          <Text style={{color: colors.BLACK}}>{title}</Text>
          <Text style={{color: colors.GREY, paddingTop: 5}}>{subTitle}</Text>
        </View>
        <Ionicons name={'logo-apple'} size={24} />
      </View>
      <View
        style={{
          ...styles.priceContainer,
          backgroundColor: value.includes('-') ? colors.BASE_RED : colors.LIME,
        }}>
        <Text style={{color: colors.WHITE}}>{stock_price}</Text>
      </View>
      <Text
        style={{
          padding: 5,
          color: value.includes('-') ? colors.BASE_RED : colors.LIME,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default StockContainer;
