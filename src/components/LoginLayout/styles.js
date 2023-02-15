import { StyleSheet } from 'react-native';
import {
  interpolateEmailBackgroundColor,
  interpolateEmailBorderColor,
  interpolatePasswordBackgroundColor,
  interpolatePasswordBorderColor,
} from './animations';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',

    resizeMode: 'cover',
  },

  formContainer: {
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,

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

    marginBottom: 16,

    backgroundColor: interpolatePasswordBackgroundColor,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: interpolatePasswordBorderColor,
    borderRadius: 8,
  },

  passwordTypeSwitch: {
    position: 'absolute',
    top: 0,
    right: 16,

    display: 'flex',
    justifyContent: 'center',

    height: '100%',
  },

  passwordTypeSwitchText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#1b4371',
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
});
