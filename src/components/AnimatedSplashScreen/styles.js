import { Animated, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const animation = new Animated.Value(1);

export const splashAnimation = Animated.timing(animation, {
  toValue: 0,
  duration: 800,
  useNativeDriver: true,
});

export const styles = StyleSheet.create({
  container: { flex: 1 },

  animatedSplashContainer: {
    pointerEvents: 'none',
    backgroundColor: Constants.manifest.splash.backgroundColor,
    opacity: animation,
  },

  animatedSplashImage: {
    width: '100%',
    height: '100%',
    resizeMode: Constants.manifest.splash.resizeMode || 'contain',
    transform: [
      {
        scale: animation,
      },
    ],
  },
});
