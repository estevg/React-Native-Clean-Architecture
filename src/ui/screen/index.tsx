import React from 'react';
import {SectionList} from 'react-native';
import Header from '../components/Header';
import MainContainer from '../components/Main';
import SectionBank from '../components/Section';
import withObservables from '@nozbe/with-observables';
import {db} from '@appBank/modules/data/database/init';

interface BankList {
  banks: Bank[];
}

const database = db.collections.get('bank');
const observeBanks = () => database.query().observe();

const enhanceWithBanks = withObservables([], () => ({
  banks: observeBanks(),
}));

const BankList = ({banks}: BankList) => {
  const _renderHeader = React.useCallback(() => <Header />, []);

  const _render = React.useCallback(
    ({item}: {item: {banks: Bank[]}}) => (
      <SectionBank title="Popular banks" data={item.banks} />
    ),
    [],
  );

  const sections = React.useMemo(
    () => [
      {
        key: 'header',
        data: [{}],
        renderItem: _renderHeader,
      },
      {
        key: 'banks',
        data: [
          {
            banks: banks ?? [],
          },
        ],
        renderItem: _render,
      },
    ],
    [_renderHeader, banks, _render],
  );

  return (
    <SectionList
      bounces={false}
      indicatorStyle="white"
      initialNumToRender={20}
      //@ts-ignore
      sections={sections}
      showsVerticalScrollIndicator={false}
    />
  );
};

const BakListRender = enhanceWithBanks(BankList);

export function Home() {
  return (
    <MainContainer edges={['top']}>
      <BakListRender />
    </MainContainer>
  );
}
