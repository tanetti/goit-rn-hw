import { Dimensions, StyleSheet } from 'react-native';
import {
  interpolateEmailBackgroundColor,
  interpolateEmailBorderColor,
  interpolatePasswordBackgroundColor,
  interpolatePasswordBorderColor,
  interpolateControlsHeight,
} from './animations';

export const styles = StyleSheet.create({
  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    resizeMode: 'cover',
  },

  formContainer: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: '#fff',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    marginBottom: 32,

    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,

    color: '#212121',

    textAlign: 'center',
  },

  fieldsContainer: {
    marginBottom: 32,
  },

  emailInputContainer: {
    marginBottom: 16,

    backgroundColor: interpolateEmailBackgroundColor,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: interpolateEmailBorderColor,
    borderRadius: 8,
  },

  passwordInputContainer: {
    position: 'relative',

    backgroundColor: interpolatePasswordBackgroundColor,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: interpolatePasswordBorderColor,
    borderRadius: 8,
  },

  passwordTypeSwitch: {
    position: 'absolute',
    top: 0,
    right: 0,

    display: 'flex',
    justifyContent: 'center',

    height: '100%',
    paddingHorizontal: 16,
  },

  emailInput: {
    display: 'flex',
    justifyContent: 'center',

    height: 50,
    paddingHorizontal: 16,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',
  },

  passwordInput: {
    display: 'flex',
    justifyContent: 'center',

    height: 50,
    paddingLeft: 16,
    paddingRight: 70,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',
  },

  controlsContainer: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    paddingTop: 11,
    paddingBottom: 103,
  },

  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 51,
    marginBottom: 8,

    backgroundColor: '#ff6c00',

    borderRadius: 100,
  },

  loginButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#fff',
  },

  registerButton: {
    padding: 8,
  },

  registerButtonText: {
    color: '#1b4371',
  },
});
