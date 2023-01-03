import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { HStack } from 'native-base';
import { styles } from './leaveCommentStyles';
const searchButton = require('../../assets/images/navigation/person-search.webp');
const onPress = () => {};
const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles.contain}>
        <HStack space={3} alignItems="center" justifyContent={'center'}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>COMMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.buttonPurple}
          >
            <HStack space={1} alignItems="center" justifyContent={'center'}>
              <Text style={styles.buttonTextWhite}>ASSIGN</Text>
              <Image style={{ width: 20, height: 20 }} source={searchButton} />
            </HStack>
          </TouchableOpacity>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default TaskInfoPopup;
