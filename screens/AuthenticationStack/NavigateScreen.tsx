import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles.js';
import { Image, Text, } from 'native-base';
import { Button } from 'native-base';

const NavigateScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: 'https://venturefizz.com/sites/default/files/m/bizzpages/logo/untitled-lexcar2022logo.png',
        }}
        style={{
          width: 200,
          height: 40,
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 100,
        }}
        alt="no"
      />
      <Text style={{ alignSelf: 'center', marginTop: 150, position: 'absolute' }}>
        WELCOME
      </Text>

      <Button
        onPress={() => navigation.navigate('RegisterScreen')}
        style={styles.button}
        size={'lg'}
      >
        REGISTER
      </Button>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.button}
        size={'lg'}
      >
        LOGIN
      </Button>
    </SafeAreaView>
  );
};

export default NavigateScreen;
