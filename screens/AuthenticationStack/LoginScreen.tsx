import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles.js';
import { VStack, Image, Text, Box, Spacer } from 'native-base';
import { Button } from 'native-base';
import { useAtom } from 'jotai';
import { currUserAtom } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const TextBox = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [currUser, setCurrUser] = useAtom(currUserAtom);
  const loginGet = async () => {
    const params = { firstName: firstName, lastName: lastName, password: password };
    const query = new URLSearchParams(params);
    fetch(`http://localhost:8080/api/v1/user/${query}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json === null) {
          alert('User not found. Please try again.');
        } else {
          setCurrUser(json);
        }
      });
  };
  const onSubmitFunc = () => {
    if (firstName !== '' && lastName !== '' && password !== '') {
      loginGet();
    } else {
      alert('Please fill out all fields');
    }
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <VStack style={styles.menu}>
        <Image
          source={{
            uri: 'https://venturefizz.com/sites/default/files/m/bizzpages/logo/untitled-lexcar2022logo.png',
          }}
          style={{
            width: 200,
            height: 40,
            alignSelf: 'center',
          }}
          alt="no"
        />
        <Text style={{ alignSelf: 'center' }}>LOGIN TO YOUR ACCOUNT</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          clearTextOnFocus={true}
          placeholder={'FirstName'}
          placeholderTextColor={'grey'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          clearTextOnFocus={true}
          placeholder={'LastName'}
          placeholderTextColor={'grey'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          clearTextOnFocus={true}
          placeholder={'Password'}
          placeholderTextColor={'grey'}
        />
        <Button onPress={() => onSubmitFunc()} style={styles.button} size={'lg'}>
          LOGIN
        </Button>
        <Button
          onPress={() => navigation.navigate('NavigateScreen')}
          style={styles.button}
          size={'lg'}
        >
          <Text color={'white'}>BACK</Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default TextBox;
