import { useEffect } from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { IMAGE_PICKER_OPTIONS } from '~/constants/imagePickerOptions';
import { badgeBackwardAnimation, badgeForwardAnimation } from './animations';
import { styles } from './styles';

export const RegisterImagePicker = ({ imageUri, setImageUri }) => {
  const addImage = async variant => {
    let result = null;

    if (variant === 'camera') {
      result = await launchCameraAsync(IMAGE_PICKER_OPTIONS);
    }

    if (variant === 'file') {
      result = await launchImageLibraryAsync(IMAGE_PICKER_OPTIONS);
    }

    if (!result || result.canceled) return;

    setImageUri(result.assets[0].uri);
  };

  const onImagePress = () => {
    if (!imageUri) addImage('camera');
    if (imageUri) setImageUri(null);
  };

  useEffect(() => {
    if (!imageUri) badgeBackwardAnimation.start();
    if (imageUri) badgeForwardAnimation.start();
  }, [imageUri]);

  return (
    <View style={styles.imagePickerWrapper}>
      <View style={styles.imagePickerContainer}>
        <TouchableOpacity
          style={styles.imagePickerTouchable}
          activeOpacity={0.6}
          onPress={onImagePress}
        >
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </TouchableOpacity>

        <Animated.View style={styles.badge} pointerEvents="none">
          <FontAwesomeIcon
            size={17}
            color={imageUri ? '#bdbdbd' : '#ff6c00'}
            icon={faPlus}
          />
        </Animated.View>
      </View>
    </View>
  );
};
