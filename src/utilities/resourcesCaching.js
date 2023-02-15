import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('~/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('~/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('~/assets/fonts/Roboto/Roboto-Bold.ttf'),
  });
};

export const cacheImages = async () => {
  await Asset.fromModule(
    require('~/assets/images/background.png')
  ).downloadAsync();
};
