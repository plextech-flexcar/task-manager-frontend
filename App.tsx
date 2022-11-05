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
import TaskInfoScreen from "./screens/TaskInfoScreen/TaskInfoScreen";
import TaskInfoPopup from "./components/TaskInfo/TaskInfoPopup";
import NewComment from "./components/TaskInfo/Modals/LeaveComment";
import ResolveTask from "./components/TaskInfo/Modals/ResolveTask"

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
      {/* <TaskListScreen /> */}
      {/* <TaskInfoPopup /> */}
      <ResolveTask />
      {/* <NewComment /> */}
    </NativeBaseProvider>
  );
}
