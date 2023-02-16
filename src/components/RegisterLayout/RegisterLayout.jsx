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
  nameForwardAnimation,
  nameBackwardAnimation,
  emailForwardAnimation,
  emailBackwardAnimation,
  passwordForwardAnimation,
  passwordBackwardAnimation,
} from './animations';
import background from '~/assets/images/background.png';
import { styles } from './styles';
import { RegisterImagePicker } from './components';

const registerFormInitialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterLayout = () => {
  const nameField = useRef(null);
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const [imageUri, setImageUri] = useState(null);
  const [registerFormState, setRegisterFormState] = useState(
    () => registerFormInitialValue
  );
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const onFormBlur = useCallback(() => {
    Keyboard.dismiss();
    nameField.current.blur();
    emailField.current.blur();
    passwordField.current.blur();
  }, []);

  const onFormSubmit = () => {
    const registerData = { ...registerFormState, image: imageUri };

    console.log(registerData);
  };

  const onNameSubmit = () => {
    setTimeout(() => emailField.current.focus(), 100);
  };

  const onEmailSubmit = () => {
    setTimeout(() => passwordField.current.focus(), 100);
  };

  const onPasswordSubmit = () => {
    onFormBlur();
    onFormSubmit();
  };

  const onLoginPress = () => console.log('Routing to Login screen');

  const onNameFocus = () => {
    nameForwardAnimation.start();
    setIsNameFocused(true);
  };

  const onNameBlur = () => {
    nameBackwardAnimation.start();
    setIsNameFocused(false);
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
  }, [onFormBlur]);

  return (
    <TouchableWithoutFeedback onPress={onFormBlur}>
      <View style={styles.layoutContainer}>
        <ImageBackground source={background} style={styles.backgroundImage} />
        <View style={styles.formContainer} pointerEvents="box-none">
          <RegisterImagePicker imageUri={imageUri} setImageUri={setImageUri} />

          <View pointerEvents="none">
            <Text style={styles.formTitle}>Registration</Text>
          </View>

          <KeyboardAvoidingView
            style={styles.fieldsContainer}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <Animated.View style={styles.nameInputContainer}>
              <TextInput
                ref={nameField}
                placeholder={isNameFocused ? null : 'Name'}
                placeholderTextColor="#bdbdbd"
                cursorColor="#bdbdbd"
                selectionColor="#e6e6e6"
                autoCapitalize="words"
                autoComplete="name"
                returnKeyType="next"
                style={styles.nameInput}
                value={registerFormState.name}
                onChangeText={name =>
                  setRegisterFormState(prevState => ({ ...prevState, name }))
                }
                onFocus={onNameFocus}
                onBlur={onNameBlur}
                onSubmitEditing={onNameSubmit}
              />
            </Animated.View>

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
                value={registerFormState.email}
                onChangeText={email =>
                  setRegisterFormState(prevState => ({ ...prevState, email }))
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
                value={registerFormState.password}
                onChangeText={password =>
                  setRegisterFormState(prevState => ({
                    ...prevState,
                    password,
                  }))
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
                style={styles.registerButton}
                activeOpacity={0.7}
                onPress={onFormSubmit}
              >
                <View pointerEvents="none">
                  <Text style={styles.registerButtonText}>Registration</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.6}
                onPress={onLoginPress}
              >
                <Text style={styles.loginButtonText}>
                  Login, if you already registered.
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
