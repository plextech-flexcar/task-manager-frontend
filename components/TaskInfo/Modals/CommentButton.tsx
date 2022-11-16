import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { HStack } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { styles1 } from './commentButtonStyles';
const onPress = () => {};
const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles1.contain}>
        <HStack space={3} alignItems="center" justifyContent={'center'}>
          <TouchableOpacity onPress={onPress} style={styles1.button}>
            <Text style={styles1.buttonText}>COMMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles1.buttonPurple}
          >
            <HStack space={1} alignItems="center" justifyContent={'center'}>
              <Text style={styles1.buttonTextWhite}>ASSIGN</Text>

              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../assets/person_search.webp')}
              />
            </HStack>
          </TouchableOpacity>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default TaskInfoPopup;
