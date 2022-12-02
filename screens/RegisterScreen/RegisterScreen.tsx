import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import { styles2 } from './styles.js';
import {Select, VStack, Image, Text, Box } from "native-base";
import { Button } from "native-base";



const TextBox = () => {
  const [text1, onChangeText1] = useState("");
  const [text2, onChangeText2] = useState("");
  const [text3, onChangeText3] = useState("");
  const [language, setLanguage] = useState('');




  return (
    <SafeAreaView>
         <Image source = {{uri:'https://venturefizz.com/sites/default/files/m/bizzpages/logo/untitled-lexcar2022logo.png'}}
          style = {{ width: 200, height: 40, position: 'absolute', alignSelf: 'center', marginTop: 100}}
          alt="no"
        />
        <Text style={{alignSelf: 'center', marginTop: 150, position:'absolute'}}>CREATE AN ACCOUNT</Text>

    



      <VStack style={styles2.menu}>
       <Select
        borderColor='#2A00A5'
      placeholder="Role"
      selectedValue={language}
      height= {10}
      width={310}

      _selectedItem={{
        bg: '#2A00A5',
        borderRadius: 32,
      }}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
    >
      <Select.Item label="User" value="key0" />
      <Select.Item label="Manager" value="key1" />
      <Select.Item label="SuperUser" value="key2" />
     
      </Select> 
      </VStack>

      <TextInput
        style={styles2.input}
        onChangeText={onChangeText1}
        value={text1}
        clearTextOnFocus={true}
        placeholder={'Full Name'}
        placeholderTextColor={'grey'}
      />
      <TextInput
        style={styles2.input}
        onChangeText={onChangeText2}
        value={text2}
        clearTextOnFocus={true}
        placeholder={'Username'}
        placeholderTextColor={'grey'}
      />
      <TextInput
        style={styles2.input}
        onChangeText={onChangeText3}
        value={text3}
        clearTextOnFocus={true}
        placeholder={'Password'}
        placeholderTextColor={'grey'}
      />
      <Button onPress={() => console.log("hello world")} style={styles2.button} size={'lg'}>REGISTER</Button>
      
    </SafeAreaView>
  );
};

export default TextBox;