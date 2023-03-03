import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useLayoutEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Symbol from '../../components/Symbol';
import TButton from '../../components/TButton';
import TCheckBox from '../../components/TCheckBox';
import colors from '../../constants/colors';
import {WatchListNavigator} from '../../types/AuthNavigator';
import {data} from './data';
import styles from './styles';

const UpdateSymbol = ({numOfColoums = 2}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchListNavigator>>();

  const renderItems = ({item}: any) => {
    return (
      <Symbol
        title={item.title}
        subTitle={item.subTitle}
        stock_price={item.stock_price}
        value={item.value}
      />
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: colors.WHITE,
      headerTitleAlign: 'left',
      headerTitle: 'Watchlist',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: colors.BLUE,
        // height: 90,
        // shadowColor: 'transparent',
      },
      headerRight: () => (
        <View style={{paddingHorizontal: 20}}>
          <Ionicons name={'md-search'} size={24} color={colors.LIME} />
        </View>
      ),
    });
  }, [navigation]);

  const handleToggle = () => {
    setToggleCheckBox(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.pencilContainer}>
          <TCheckBox value={toggleCheckBox} onChange={handleToggle} />
          <Text style={styles.headerText}>Select all</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.headerText}>price</Text>
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
      <View style={styles.buttonContainer}>
        <TButton title="Cancel" style={{width: '48%'}} />
        <TButton
          title="Delete"
          textStyle={{color: colors.WHITE}}
          leftIcon={true}
          iconColor={colors.WHITE}
          iconName={'delete'}
          style={styles.deleteButton}
        />
      </View>
      <View style={styles.disclaimerContainer}>
        <Text style={{color: colors.GREY}}>Data disclaimer</Text>
        <Ionicons name={'chevron-forward'} size={24} color={colors.GREY} />
      </View>
    </View>
  );
};

export default UpdateSymbol;
