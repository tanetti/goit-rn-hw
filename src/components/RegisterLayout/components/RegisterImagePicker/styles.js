import { Dimensions, StyleSheet } from 'react-native';
import { interpolateBadgeRotation, interpolateBadgeColor } from './animations';

export const styles = StyleSheet.create({
  imagePickerWrapper: {
    position: 'absolute',
    top: -60,
    left: 0,

    display: 'flex',
    alignItems: 'center',

    width: Dimensions.get('window').width,
  },

  imagePickerContainer: {
    position: 'relative',

    width: 120,
    height: 120,

    backgroundColor: '#f6f6f6',

    borderRadius: 16,
  },

  imagePickerTouchable: {
    flex: 1,
  },

  badge: {
    position: 'absolute',
    bottom: 14,
    right: -12,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 25,
    height: 25,

    backgroundColor: '#fff',

    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    borderColor: interpolateBadgeColor,

    transform: [{ rotate: interpolateBadgeRotation }],
  },

  image: {
    width: '100%',
    height: '100%',

    borderRadius: 16,

    resizeMode: 'cover',
  },
});
