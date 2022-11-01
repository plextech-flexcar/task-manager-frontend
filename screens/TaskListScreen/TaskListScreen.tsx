import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Task } from "../../models/Task";
import TaskCardList from "../../components/TaskCardList/TaskCardList";
import TaskListHeader from "../../components/TaskListHeader/TaskListHeader";

const TaskListScreen = () => {
  let task1: Task = {
    taskTitle: "Glass Chip",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: 3,
  };

  let task2: Task = {
    taskTitle: "Front Damage",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: 2,
  };

  let task3: Task = {
    taskTitle: "Blood stains",
    taskAge: 5,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: 1,
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
      <TaskListHeader />
      <TaskCardList tasks={tasks} />
    </SafeAreaView>
  );
};

export default TaskListScreen;
