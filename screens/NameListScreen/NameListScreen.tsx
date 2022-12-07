import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Name } from '../../models/Name';
import NameCardList from '../../components/NameCardList/NameCardList';
import AssignModalFunc from '../../components/TaskAssign/AssignModal';
import FlatListItemSeparator from '../../components/ItemSeparation';
import { IconButton, Text } from 'react-native-paper';
import { Modal } from 'react-native';

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const name1: Name = {
    first: 'Denver',
    last: 'Chao',
  };
  const nameList: Name[] = [name1, name1, name1, name1, name1, name1];
  const [modalVisible, setModalVisible] = useState(true);


  return (

    <SafeAreaView style={styles.view}>
          <Modal 
           animationType="slide"
           transparent={true}
           visible={modalVisible}
           onRequestClose={() => {
             Alert.alert("Modal has been closed.");
             setModalVisible(!modalVisible);
           }}
          >
      <Pressable style={styles.icon}>
        <IconButton icon="close" color="#2A00A5" size={20} onPress={() => closeCall()} />
      </Pressable>
      <Text style={styles.text}>Assign Tasks</Text>
      <AssignModalFunc />
      <FlatListItemSeparator/>
      <NameCardList name={nameList} onAssignCall={onAssignCall} />
      </Modal>
    </SafeAreaView>

  );
};

export default NameListScreen;
