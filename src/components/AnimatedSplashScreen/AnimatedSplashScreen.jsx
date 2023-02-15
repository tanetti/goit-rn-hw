import { useCallback, useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { cacheFonts, cacheImages } from '~/utilities/resourcesCaching';
import splashImage from '~/assets/splash.png';
import { splashAnimation, styles } from './styles';

SplashScreen.preventAutoHideAsync();

export const AnimatedSplashScreen = ({ children }) => {
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!isAppReady) return;

    splashAnimation.start(() => setAnimationComplete(true));
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await cacheFonts();
      await cacheImages();
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error);
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      {isAppReady && children}

      {!isSplashAnimationComplete && (
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.animatedSplashContainer]}
        >
          <Animated.Image
            style={styles.animatedSplashImage}
            source={splashImage}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
};
