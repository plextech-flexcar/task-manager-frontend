import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Name } from '../../models/Name';
import NameCardList from '../../components/NameCardList/NameCardList';
import AssignModalFunc from '../../components/TaskAssign/AssignModal';
import FlatListItemSeparator from '../../components/ItemSeparation';
import { IconButton, Text } from 'react-native-paper';
import { FormControl, Input, Modal, Button } from 'native-base';

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const [users, setUsers] = useState([]);
  const getUsersAPI = async () => {
    fetch('http://localhost:8080/api/v1/users', {
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
        console.log('USERSSS', json);
        setUsers(json);
      });
  };
  useEffect(() => {
    getUsersAPI();
  }, [users]);



  return (

    <SafeAreaView style={styles.view}>
      <Pressable style={styles.icon}>
        <IconButton icon="close" color="#2A00A5" size={20} onPress={() => closeCall()} />
      </Pressable>
      <Text style={styles.text}>Assign Tasks</Text>
      <AssignModalFunc />
      <FlatListItemSeparator />
      <NameCardList users={users} onAssignCall={onAssignCall} />
    </SafeAreaView>

  );
};

export default NameListScreen;
