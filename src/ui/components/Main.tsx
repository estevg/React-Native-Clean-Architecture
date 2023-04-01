import React from 'react';
import {View, StyleProp, ViewStyle, StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

interface MainContainerProps {
  margins?: boolean;
  style?: StyleProp<ViewStyle>;
  edges?: React.ComponentProps<typeof SafeAreaView>['edges'];
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({
  style,
  children,
  edges = ['top', 'bottom'],
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: edges.find(item => item === 'top') ? insets.top : 0,
          paddingBottom: edges.find(item => item === 'bottom')
            ? insets.bottom
            : 0,
          backgroundColor: '#ffe501',
        },
        'backgroundColor' in (style || {})
          ? {backgroundColor: (style as ViewStyle).backgroundColor}
          : undefined,
      ]}>
      <StatusBar animated barStyle={'light-content'} />
      <View style={[{flex: 1}, style]}>{children}</View>
    </View>
  );
};

export default MainContainer;
