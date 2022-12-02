import React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Name } from '../../models/Name';
import NameCardList from '../../components/NameCardList/NameCardList';
import AssignModalFunc from '../../components/TaskAssign/AssignModal';
import FlatListItemSeparator from '../../components/ItemSeparation';
import { IconButton, Text } from 'react-native-paper';

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const name1: Name = {
    first: 'Denver',
    last: 'Chao',
  };
  const nameList: Name[] = [name1, name1, name1, name1, name1, name1];

  return (
    <SafeAreaView style={styles.view}>
      <Pressable style={styles.icon}>
        <IconButton icon="close" color="#2A00A5" size={20} onPress={() => closeCall()} />
      </Pressable>
      <Text style={styles.text}>Assign Tasks</Text>
      <AssignModalFunc />
      <FlatListItemSeparator/>
      <NameCardList name={nameList} onAssignCall={onAssignCall} />
    </SafeAreaView>
  );
};

export default NameListScreen;
