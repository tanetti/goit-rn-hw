import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { LoginScreen } from '~/screens/LoginScreen';

export const Root = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: Constants.manifest.splash.backgroundColor,
    }}
  >
    <StatusBar style="auto" />

    <LoginScreen />
  </SafeAreaView>
);
