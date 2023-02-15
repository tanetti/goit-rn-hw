import { StyleSheet } from 'react-native';

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

  formInput: {
    height: 50,
    marginBottom: 16,
    padding: 16,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',
    backgroundColor: '#f6f6f6',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e8e8e8',
    borderRadius: 8,
  },
});
