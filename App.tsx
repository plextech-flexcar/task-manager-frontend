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
  return (
    <NativeBaseProvider>
        <NameListScreen/>
        <IconComponent first={"Nandish"} last={"Khandhars"}></IconComponent>
    </NativeBaseProvider>
  );
}