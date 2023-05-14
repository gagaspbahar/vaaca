import React from 'react';
import { View, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/splash.png')}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
    </View>
  );
};

export default SplashScreen;
