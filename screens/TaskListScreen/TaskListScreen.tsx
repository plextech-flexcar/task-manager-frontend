import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { Task } from "../../models/Task";
import TaskCardList from "../../components/TaskCardList/TaskCardList";
import PurpleHeader from "../../components/Header/PurpleHeader";
import BottomPopup from "../../components/SortFilter/BottomPopup";

const TaskListScreen = () => {
  let task1: Task = {
    taskTitle: "Glass Chip",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "high",
  };

  let task2: Task = {
    taskTitle: "Front Damage",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "normal",
  };

  let task3: Task = {
    taskTitle: "Blood stains",
    taskAge: 5,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "low",
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
      <BottomPopup />
    </SafeAreaView>
  );
};

export default TaskListScreen;
