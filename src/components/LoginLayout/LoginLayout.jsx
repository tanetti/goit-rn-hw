import { useState } from 'react';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import background from '~/assets/images/background.png';
import { styles } from './styles';

export const LoginLayout = () => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#bdbdbd"
          style={styles.formInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#bdbdbd"
          secureTextEntry={isPasswordHide}
          style={styles.formInput}
        />
      </View>
    </ImageBackground>
  );
};
