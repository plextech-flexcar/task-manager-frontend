import React from 'react';
import { SafeAreaView} from 'react-native';
import { styles } from './styles';
import { Name } from '../../models/Name';
import NameCardList from '../../components/NameCardList/NameCardList';
import AssignModalFunc from '../../components/TaskAssign/AssignModal';

const NameListScreen = () => {
  let name1: Name = {
    first: 'Rhythm',
    last: 'Chao',
  };
  let nameList: Name[] = [name1, name1, name1, name1, name1, name1];

  return (
    <SafeAreaView style={styles.view}>
      <h3>Assign 4 Tasks</h3>
      <AssignModalFunc />

      <NameCardList name={nameList} />
    </SafeAreaView>
  );
};

export default NameListScreen;
