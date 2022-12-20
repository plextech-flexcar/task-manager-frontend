import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import TaskListHeader from '../../components/TaskListHeader/TaskListHeader';
import SortFilter from '../../components/SortFilter/SortFilter';
import { allVehiclesAtom, displayTasksAtom  } from "../../atoms";
import { useAtom} from "jotai";

const TaskListScreen = () => {
  const [displayTasks] = useAtom(displayTasksAtom);
  const [vehicles] = useAtom(allVehiclesAtom);

  return (
    <SafeAreaView style={styles.view}>
      <TaskListHeader />
      <TaskCardList tasks={displayTasks} />
      <SortFilter />
    </SafeAreaView>
  );
};

export default TaskListScreen;
