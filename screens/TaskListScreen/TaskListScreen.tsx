import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Task } from "../../models/Task";
import TaskCardList from "../../components/TaskCardList/TaskCardList";
import PurpleHeader from "../../components/Header/TaskHeader";

const TaskListScreen = () => {
  let task1: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Pasenger's side",
    comment: "Pls finish ASAP",
    make: "Skoda",
    model: "Rapid",
    color: "Magenta",
    license: "ABC",
    mva: "R436542",
    age: 1667271542,
    assigned: "Elias Charambides",
    market: "Wisconsin",
    status: false,
    createdBy: "Willium",
  };

  let task2: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Pasenger's side",
    comment: "Pls finish ASAP",
    make: "Skoda",
    model: "Rapid",
    color: "Magenta",
    license: "ABC",
    mva: "R436542",
    age: 1667271542,
    assigned: "Elias Charambides",
    market: "Wisconsin",
    status: false,
    createdBy: null,
  };

  let task3: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Pasenger's side",
    comment: "Pls finish ASAP",
    make: "Skoda",
    model: "Rapid",
    color: "Magenta",
    license: "ABC",
    mva: "R436542",
    age: 1667271542,
    assigned: "Elias Charambides",
    market: "Wisconsin",
    status: false,
    createdBy: null,
  };

  let tasks: Task[] = [
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
    task1,
  ];

  return (
    <SafeAreaView style={styles.view}>
      <PurpleHeader />
      <TaskCardList tasks={tasks} />
    </SafeAreaView>
  );
};

export default TaskListScreen;
