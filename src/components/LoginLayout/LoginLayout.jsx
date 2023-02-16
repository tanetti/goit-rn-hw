import { useRef, useState } from 'react';
import {
  Platform,
  Animated,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  emailForwardAnimation,
  emailBackwardAnimation,
  passwordForwardAnimation,
  passwordBackwardAnimation,
} from './animations';
import background from '~/assets/images/background.png';
import { styles } from './styles';

const loginFormInitialValue = { email: '', password: '' };

export const LoginLayout = () => {
  const passwordField = useRef(null);
  const [loginFormState, setLoginFormState] = useState(
    () => loginFormInitialValue
  );
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const onEmailSubmit = () => {
    setTimeout(() => passwordField.current.focus(), 100);
  };

  const onEmailFocus = () => {
    emailForwardAnimation.start();
    setIsEmailFocused(true);
  };

  const onEmailBlur = () => {
    emailBackwardAnimation.start();
    setIsEmailFocused(false);
  };

  const onPasswordFocus = () => {
    passwordForwardAnimation.start();
    setIsPasswordFocused(true);
  };

  const onPasswordBlur = () => {
    passwordBackwardAnimation.start();
    setIsPasswordFocused(false);
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>

        <Animated.View style={styles.emailInputContainer}>
          <TextInput
            placeholder={isEmailFocused ? null : 'Email address'}
            placeholderTextColor="#bdbdbd"
            keyboardType="email-address"
            cursorColor="#bdbdbd"
            selectionColor="#e6e6e6"
            autoCapitalize="none"
            autoComplete="email"
            returnKeyType="next"
            style={styles.emailInput}
            value={loginFormState.email}
            onChangeText={email =>
              setLoginFormState(prevState => ({ ...prevState, email }))
            }
            onFocus={onEmailFocus}
            onBlur={onEmailBlur}
            onSubmitEditing={onEmailSubmit}
          />
        </Animated.View>

        <Animated.View style={styles.passwordInputContainer}>
          <TextInput
            ref={passwordField}
            placeholder={isPasswordFocused ? null : 'Password'}
            placeholderTextColor="#bdbdbd"
            secureTextEntry={isPasswordHide}
            keyboardType={Platform.select({
              android: isPasswordHide ? 'default' : 'visible-password',
              ios: isPasswordHide ? 'default' : 'ascii-capable',
            })}
            cursorColor="#bdbdbd"
            selectionColor="#e6e6e6"
            autoCapitalize="none"
            returnKeyType="go"
            style={styles.passwordInput}
            value={loginFormState.password}
            onChangeText={password =>
              setLoginFormState(prevState => ({ ...prevState, password }))
            }
            onFocus={onPasswordFocus}
            onBlur={onPasswordBlur}
          />

          <TouchableOpacity
            style={styles.passwordTypeSwitch}
            onPress={() => setIsPasswordHide(prevState => !prevState)}
          >
            <Text style={styles.passwordTypeSwitchText}>
              {isPasswordHide ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};
