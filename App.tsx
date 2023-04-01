import {useGetBanks} from '@appBank/ui/hooks/bank';
import React from 'react';
import {Home} from './src/ui/screen/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  useGetBanks();

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
