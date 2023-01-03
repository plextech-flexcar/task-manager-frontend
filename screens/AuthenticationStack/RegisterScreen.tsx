import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles.js';
import { Select, VStack, Image, Text, Box, Spacer } from 'native-base';
import { Button } from 'native-base';
import { useAtom } from 'jotai';
import { currUserAtom } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const TextBox = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [currUser, setCurrUser] = useAtom(currUserAtom);
  const navigation = useNavigation();

  const registerPost = async () => {
    fetch(`http://localhost:8080/api/v1/newUser`, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        password: password,
        role: role,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setCurrUser(json);
      });
  };
  const onSubmitFunc = () => {
    if (firstName !== '' && lastName !== '' && password !== '' && role !== '') {
      registerPost();
    } else {
      alert('Please fill out all fields');
    }
  };
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
        <Text style={{ alignSelf: 'center' }}>CREATE AN ACCOUNT</Text>
        <Select
          borderColor="#2A00A5"
          placeholder="Role"
          selectedValue={role}
          height={10}
          width={310}
          _selectedItem={{
            bg: '#2A00A5',
            borderRadius: 32,
          }}
          onValueChange={(itemValue: string) => {
            setRole(itemValue);
          }}
          mt={10}
        >
          <Select.Item label="Associate" value="ASSOCIATE" />
          <Select.Item label="Manager" value="MANAGER" />
          <Select.Item label="Superuser" value="SUPERUSER" />
        </Select>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          clearTextOnFocus={true}
          placeholder={'First Name'}
          placeholderTextColor={'grey'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          clearTextOnFocus={true}
          placeholder={'Last Name'}
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
          REGISTER
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
