import { Animated } from 'react-native';

const nameAnimation = new Animated.Value(0);
const emailAnimation = new Animated.Value(0);
const passwordAnimation = new Animated.Value(0);

export const nameForwardAnimation = Animated.timing(nameAnimation, {
  toValue: 30,
  duration: 300,
  useNativeDriver: false,
});

export const nameBackwardAnimation = Animated.timing(nameAnimation, {
  toValue: 0,
  duration: 300,
  useNativeDriver: false,
});

export const emailForwardAnimation = Animated.timing(emailAnimation, {
  toValue: 30,
  duration: 300,
  useNativeDriver: false,
});

export const emailBackwardAnimation = Animated.timing(emailAnimation, {
  toValue: 0,
  duration: 300,
  useNativeDriver: false,
});

export const passwordForwardAnimation = Animated.timing(passwordAnimation, {
  toValue: 30,
  duration: 300,
  useNativeDriver: false,
});

export const passwordBackwardAnimation = Animated.timing(passwordAnimation, {
  toValue: 0,
  duration: 300,
  useNativeDriver: false,
});

export const interpolateNameBackgroundColor = nameAnimation.interpolate({
  inputRange: [0, 30],
  outputRange: ['#f6f6f6', '#fff'],
});

export const interpolateNameBorderColor = nameAnimation.interpolate({
  inputRange: [0, 30],
  outputRange: ['#e8e8e8', '#ff6c00'],
});

export const interpolateEmailBackgroundColor = emailAnimation.interpolate({
  inputRange: [0, 30],
  outputRange: ['#f6f6f6', '#fff'],
});

export const interpolateEmailBorderColor = emailAnimation.interpolate({
  inputRange: [0, 30],
  outputRange: ['#e8e8e8', '#ff6c00'],
});

export const interpolatePasswordBackgroundColor = passwordAnimation.interpolate(
  {
    inputRange: [0, 30],
    outputRange: ['#f6f6f6', '#fff'],
  }
);

export const interpolatePasswordBorderColor = passwordAnimation.interpolate({
  inputRange: [0, 30],
  outputRange: ['#e8e8e8', '#ff6c00'],
});
