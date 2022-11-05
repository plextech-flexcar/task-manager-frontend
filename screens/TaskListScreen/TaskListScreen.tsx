import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Task } from '../../models/Task';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import TaskListHeader from '../../components/TaskListHeader/TaskListHeader';

const TaskListScreen = () => {
  const task1: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Pasenger's side",
    description:
      'Using a windshied repair kit, you can remove the broken glass and replace it with a new piece of glass, and clean the area, apply the adhesive.',
    comment: 'Pls finish ASAP',
    make: 'Skoda',
    model: 'Rapid',
    color: 'Magenta',
    license: 'qjt7Bi',
    mva: 'R436542',
    age: 1667271542,
    assigned: 'Elias Charambides',
    market: 'Wisconsin',
    status: true,
    createdBy: 'Willium Hopkin',
    carImage:
      'https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-very-good-car-honda-civic-10.png',
    state: 'NC',
    vin: 'vy6si92Chj',
    priority: 3
  };

  const tasks: Task[] = [task1];

  return (
    <SafeAreaView style={styles.view}>
      <TaskListHeader />
      <TaskCardList tasks={tasks} />
    </SafeAreaView>
  );
};

export default TaskListScreen;
