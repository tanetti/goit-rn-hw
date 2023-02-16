import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { RegisterScreen } from '~/screens/RegisterScreen';

export const Root = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: Constants.manifest.splash.backgroundColor,
    }}
  >
    <StatusBar style="auto" />

    <RegisterScreen />
  </SafeAreaView>
);
