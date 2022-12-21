import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import TaskListHeader from '../../components/TaskListHeader/TaskListHeader';
import SortFilter from '../../components/SortFilter/SortFilter';
import { displayTasksAtom } from '../../atoms';
import { useAtom } from 'jotai';

const TaskListScreen = () => {
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  useEffect(() => {
    const [newTasks] = useAtom(displayTasksAtom);
    setDisplayTasks(newTasks);
  }, [displayTasks]);
  return (
    <SafeAreaView style={styles.view}>
      <TaskListHeader />
      <TaskCardList tasks={displayTasks} />
      <SortFilter />
    </SafeAreaView>
  );
};

export default TaskListScreen;
