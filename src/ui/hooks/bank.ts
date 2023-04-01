import {useEffect} from 'react';
import {GetBankCase} from '@appBank/modules/domain/bankCase';

export const useGetBanks = () => {
  useEffect(() => {
    const methods = new GetBankCase();
    methods.getBanksCase().catch(error => {
      console.log('error', error);
    });
  }, []);
};
