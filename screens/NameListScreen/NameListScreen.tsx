import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import { Name } from '../../models/Name';
import NameCardList from '../../components/NameCardList/NameCardList';
import AssignModalFunc from '../../components/TaskAssign/AssignModal';
import FlatListItemSeparator from '../../components/ItemSeperation';
import { IconButton } from 'react-native-paper';
import { position } from 'native-base/lib/typescript/theme/styled-system';

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const name1: Name = {
    first: 'Rhythm',
    last: 'Chao',
  };
  const nameList: Name[] = [name1, name1, name1, name1, name1, name1];

  return (
    <SafeAreaView style={styles.view}>
      <Pressable style={styles.icon}>
        <IconButton icon="close" color="#2A00A5" size={20} onPress={() => closeCall()} />
      </Pressable>
      <Text style={styles.text}>Assign 4 Tasks</Text>

      <AssignModalFunc />
      <FlatListItemSeparator></FlatListItemSeparator>
      <NameCardList name={nameList} onAssignCall={onAssignCall} />
    </SafeAreaView>
  );
};

export default NameListScreen;
