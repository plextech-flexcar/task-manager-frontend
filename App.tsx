import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskCardList from "./components/TaskCardList/TaskCardList"
import { Task } from "./models/task";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
let task1: Task = {
  taskTitle: "Glass Chip",
  taskAge: 3,
  carModel: "Black Land Rover",
  licensePlate: "123test, CA",
  mva: 12391929,
  priority: "high"
}
export default function App() {
  let task1: Task = {
    taskTitle: "Glass Chip",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "high",
  }

  let task2: Task = {
    taskTitle: "Front Damage",
    taskAge: 3,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "normal",
  }

  let task3: Task = {
    taskTitle: "Blood stains",
    taskAge: 5,
    carModel: "Black Range Rover",
    licensePlate: "123test",
    mva: 123123,
    priority: "low",
  }

  let tasks: Task[] = [task1, task2, task3]

  return (
    <NativeBaseProvider>
          <TaskCardList tasks={tasks}/>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
