import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Text from './Text';

interface HeaderProps {}

const {width} = Dimensions.get('screen');

const DATA: {title: string; amount: string}[] = [
  {
    title: 'Credit',
    amount: '2.000.000',
  },
  {
    title: 'Personal',
    amount: '3.500.000',
  },
  {
    title: 'Family',
    amount: '1.000.000',
  },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={style.container}>
      {DATA.map((item, index) => {
        return (
          <View style={{marginBottom: 20}} key={index}>
            <Text style={style.title} variant="title">
              {item.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text variant="mega-title">$</Text>
              <Text style={{marginLeft: 2, marginTop: 5}} variant="big-title">
                {item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: width * 0.7,
    justifyContent: 'center',
  },
  title: {
    color: '#d8b900',
  },
});

export default Header;
