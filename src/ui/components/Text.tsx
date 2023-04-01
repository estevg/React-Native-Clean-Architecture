import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import {scale} from '@appBank/config/commons';

/* @ts-ignore */
if (RNText.defaultProps == null) {
  /* @ts-ignore */
  RNText.defaultProps = {};
}
/* @ts-ignore */
RNText.defaultProps.allowFontScaling = false;

export interface TextProps extends RNTextProps {
  bold?: boolean;
  mediumBold?: boolean;
  accent?: boolean;
  italic?: boolean;
  regular?: boolean;
  contrast?: boolean;
  translate?: boolean;
  defaultValue?: string;
  textAlign?: 'left' | 'center' | 'right';
  translationParams?: {[key: string]: any};
  variant?:
    | 'body'
    | 'title'
    | 'small'
    | 'medium'
    | 'mediumBold'
    | 'subtitle'
    | 'subtitleBold'
    | 'big-title'
    | 'mega-title'
    | 'semi-big-title';
  children?: any;
  gradient?: boolean;
  colors?: string[];
}

const Text: React.FC<TextProps> = ({variant, children, style, ...props}) => {
  const variantStyle =
    (variant ?? '') in styles
      ? styles[variant as keyof typeof styles]
      : undefined;

  return (
    <RNText style={[variantStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: scale(15),
  },
  body: {
    fontWeight: '300',
    fontSize: scale(12),
  },
  subtitle: {
    fontSize: scale(13),
  },
  small: {
    fontSize: scale(10),
  },
  medium: {
    fontSize: scale(15),
  },
  mediumBold: {
    fontSize: scale(18),
  },
  ['big-title']: {
    fontWeight: 'bold',
    fontSize: scale(22),
  },
  ['mega-title']: {
    fontWeight: 'bold',
    fontSize: scale(30),
  },
});

export default Text;
