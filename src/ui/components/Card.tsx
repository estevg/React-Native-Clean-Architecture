import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from './Text';

interface CardProps {
  item: Bank;
}

const Card: React.FC<CardProps> = ({item}) => {
  return (
    <View style={style.container}>
      <Image resizeMode="cover" source={{uri: item.url}} style={style.image} />
      <View style={style.content}>
        <Text style={style.title} variant="title">
          {item.bankName}
        </Text>
        <Text style={style.commons} variant="subtitle">
          {item.description}
        </Text>
      </View>
      <Text>
        <Text style={style.commons} variant="body">
          Age: {item.age}
        </Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    backgroundColor: '#fcfcfc',
    borderRadius: 10,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    marginBottom: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  commons: {
    color: '#838a95',
  },
});

export default Card;
