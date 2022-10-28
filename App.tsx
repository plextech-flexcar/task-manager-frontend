import React from "react";
import {
  Text,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import TaskListScreen from "./screens/TaskListScreen/TaskListScreen";

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
          <TaskListScreen/>
    </NativeBaseProvider>
  );
}