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
import TaskListScreen from "./screens/TaskListScreen/TaskListScreen";
// import { useAtom } from "jotai";
import { allTasksAtom, displayTasksAtom } from "./atoms";
import NameCard from "./components/NameCard/NameCard";
import TaskCard from "./components/TaskCard/TaskCard";
import AssignModal from "./components/TaskAssign/AssignModal";
import NameCardList from "./components/NameCardList/NameCardList";
import NameListScreen from "./screens/NameListScreen/NameListScreen";
import IconComponent from "./components/IconComponent";


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

export default function App() {
  // const [allTasks, setAllTasks] = useAtom(allTasksAtom)
  // const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom)

  // fetch("localhost:8080/api/v1/task")
  //   .then(response => response.json())
  //   .then(data => {
  //     setAllTasks(data)
  //     setDisplayTasks(data)
  //     console.log(allTasks)
  //     console.log(displayTasks)
  //   })

  return (
    <NativeBaseProvider>
        <NameListScreen/>
        <IconComponent first={"Nandish"} last={"Khandhars"}></IconComponent>
    </NativeBaseProvider>
  );
}
