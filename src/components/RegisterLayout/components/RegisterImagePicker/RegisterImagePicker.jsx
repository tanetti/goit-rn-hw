import { Animated, Image, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { badgeBackwardAnimation, badgeForwardAnimation } from './animations';
import { useEffect } from 'react';

export const RegisterImagePicker = ({ imageUri, setImageUri }) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result || result.canceled) return;

    setImageUri(result.assets[0].uri);
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result || result.canceled) return;

    setImageUri(result.assets[0].uri);
  };

  const onImagePress = () => {
    if (!imageUri) takePhoto();
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
