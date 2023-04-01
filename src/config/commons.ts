import {Dimensions, Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';

const guidelineBaseWidth = deviceInfoModule.isTablet() ? 768 : 350;
const guidelineBaseHeight = deviceInfoModule.isTablet() ? 1024 : 680;
export const {width, height} = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const addAlpha = (color: string, opacity: number) => {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};
