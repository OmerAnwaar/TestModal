import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import StockContainer from '../../components/StockContainer';

import {data} from './data';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TButton from '../../components/TButton';
import colors from '../../constants/colors';
import {WatchListNavigator} from '../../types/AuthNavigator';
import styles from './styles';

const Watchlist = ({numOfColoums = 2}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchListNavigator>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: colors.BLUE,
      },
      headerLeft: () => (
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: colors.WHITE,
          }}>
          Watchlist
        </Text>
      ),
      headerRight: () => (
        <View style={{paddingHorizontal: 20}}>
          <Ionicons name={'md-search'} size={24} color={colors.LIME} />
        </View>
      ),
    });
  }, [navigation]);

  const renderItems = ({item}: any) => {
    return (
      <StockContainer
        title={item.title}
        subTitle={item.subTitle}
        stock_price={item.stock_price}
        value={item.value}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.pencilContainer}>
          <Octicons name={'pencil'} size={18} color={colors.DARK_TEXT} />
          <Text style={styles.headerText}>Edit List</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.headerText}>Sort by price</Text>
          <Ionicons name={'chevron-down'} size={24} color={colors.DARK_TEXT} />
        </View>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={numOfColoums}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
      />

      <TButton
        title={'Add Symbol'}
        iconName={'plus'}
        leftIcon={true}
        onPress={() => navigation.navigate('UpdateSymbol')}
      />
      <View style={styles.disclaimerContainer}>
        <Text style={{color: colors.GREY}}>Data disclaimer</Text>
        <Ionicons name={'chevron-forward'} size={24} color={colors.GREY} />
      </View>
    </View>
  );
};

export default Watchlist;
