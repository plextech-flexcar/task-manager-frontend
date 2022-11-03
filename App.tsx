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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
          <Stack.Screen name="TaskInfoScreen" component={TaskInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
