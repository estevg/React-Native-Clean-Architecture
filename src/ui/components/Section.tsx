import React from 'react';
import Card from './Card';
import Text from './Text';
import {FlatList, StyleSheet, View} from 'react-native';

interface SectionProps {
  data: Bank[];
  title: string;
}

const SectionBank = ({data, title}: SectionProps) => {
  return (
    <View style={style.container}>
      <Text style={style.title} variant="medium">
        {title}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={{marginVertical: 10}} />;
        }}
        data={data}
        keyExtractor={item => `${item.age}`}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#838a95',
  },
});

export default SectionBank;
