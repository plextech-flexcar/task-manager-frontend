import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { styles2 } from './styles.js';
import { Select, VStack, Image, Text, Box } from 'native-base';
import { Button } from 'native-base';

const NavigateScreen = ({ navigation }) => {
  const [text1, onChangeText1] = useState('');
  const [text2, onChangeText2] = useState('');
  const [text3, onChangeText3] = useState('');
  const [language, setLanguage] = useState('');

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
        style={styles2.button}
        size={'lg'}
      >
        REGISTER
      </Button>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles2.button}
        size={'lg'}
      >
        LOGIN
      </Button>
    </SafeAreaView>
  );
};

export default NavigateScreen;
