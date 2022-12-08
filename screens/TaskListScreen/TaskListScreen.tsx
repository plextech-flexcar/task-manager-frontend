import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import TaskListHeader from '../../components/TaskListHeader/TaskListHeader';
import SortFilter from '../../components/SortFilter/SortFilter';
import { displayTasksAtom  } from "../../atoms";
import { useAtom} from "jotai";
import { ScrollView } from 'native-base';

const TaskListScreen = () => {
  const [displayTasks] = useAtom(displayTasksAtom);

  return (
    <SafeAreaView style={styles.view}>
      <TaskListHeader />
      <TaskCardList tasks={displayTasks} />
      <SortFilter/>
    </SafeAreaView>
  );
};

export default TaskListScreen;
