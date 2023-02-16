import { Animated } from 'react-native';

const badgeAnimation = new Animated.Value(0);

export const badgeForwardAnimation = Animated.timing(badgeAnimation, {
  toValue: 45,
  duration: 300,
  useNativeDriver: false,
});

export const badgeBackwardAnimation = Animated.timing(badgeAnimation, {
  toValue: 0,
  duration: 300,
  useNativeDriver: false,
});

export const interpolateBadgeRotation = badgeAnimation.interpolate({
  inputRange: [0, 45],
  outputRange: ['0deg', '45deg'],
});

export const interpolateBadgeColor = badgeAnimation.interpolate({
  inputRange: [0, 45],
  outputRange: ['#ff6c00', '#bdbdbd'],
});
