import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import {
  Platform,
  Animated,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
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
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const [loginFormState, setLoginFormState] = useState(
    () => loginFormInitialValue
  );
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const onFormBlur = useCallback(() => {
    Keyboard.dismiss();
    emailField.current.blur();
    passwordField.current.blur();
  }, []);

  const onFormSubmit = () => console.log(loginFormState);

  const onEmailSubmit = () => {
    setTimeout(() => passwordField.current.focus(), 100);
  };

  const onPasswordSubmit = () => {
    onFormBlur();
    onFormSubmit();
  };

  const onRegisterPress = () => console.log('Routing to Register screen');

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

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardShown(true)
    );

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      onFormBlur();
      setIsKeyboardShown(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onFormBlur}>
      <View style={styles.layoutContainer}>
        <ImageBackground source={background} style={styles.backgroundImage} />
        <View style={styles.formContainer} pointerEvents="box-none">
          <View pointerEvents="none">
            <Text style={styles.formTitle}>Login</Text>
          </View>

          <KeyboardAvoidingView
            style={styles.fieldsContainer}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <Animated.View style={styles.emailInputContainer}>
              <TextInput
                ref={emailField}
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
                onSubmitEditing={onPasswordSubmit}
              />

              <TouchableOpacity
                style={styles.passwordTypeSwitch}
                activeOpacity={0.2}
                onPress={() => setIsPasswordHide(prevState => !prevState)}
              >
                {isPasswordHide ? (
                  <FontAwesomeIcon size={32} color="#bdbdbd" icon={faEye} />
                ) : (
                  <FontAwesomeIcon
                    size={32}
                    color="#bdbdbd"
                    icon={faEyeSlash}
                  />
                )}
              </TouchableOpacity>
            </Animated.View>
          </KeyboardAvoidingView>

          {!isKeyboardShown && (
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.7}
                onPress={onFormSubmit}
              >
                <View pointerEvents="none">
                  <Text style={styles.loginButtonText}>Login</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.registerButton}
                activeOpacity={0.6}
                onPress={onRegisterPress}
              >
                <Text style={styles.registerButtonText}>
                  Register, if you haven't yet.
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
