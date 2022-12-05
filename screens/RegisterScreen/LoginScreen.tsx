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
        <VStack style={styles2.menu}>

         <Image source = {{uri:'https://venturefizz.com/sites/default/files/m/bizzpages/logo/untitled-lexcar2022logo.png'}}
          style = {{ width: 200, height: 40, position: 'absolute', alignSelf: 'center', marginTop: 120}}
          alt="no"
        />
        <Text style={{alignSelf: 'center', marginTop: 170, position:'absolute'}}>LOGIN TO YOUR ACCOUNT</Text>

        <SafeAreaView style={{}}>
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
            <Button onPress={() => console.log("hello world")} style={styles2.button} size={'lg'}>LOGIN</Button>
        </SafeAreaView>
      </VStack>

      
    </SafeAreaView>
  );
};

export default TextBox;