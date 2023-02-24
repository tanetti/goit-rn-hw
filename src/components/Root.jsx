import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { LoginScreen } from '~/screens/LoginScreen';
import { RegisterScreen } from '~/screens/RegisterScreen';

const MainStack = createStackNavigator();

export const Root = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: Constants.manifest.splash.backgroundColor,
    }}
  >
    <StatusBar style="auto" />

    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
