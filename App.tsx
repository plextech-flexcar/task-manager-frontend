import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import { useAtom } from 'jotai';
import { allTasksAtom, displayTasksAtom } from './atoms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator();
export default function App() {
  const [allTasks, setAllTasks] = useAtom(allTasksAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);

  // fetch(
  //   "http://localhost:8080/api/v1/task",
  //   {
  //     mode: 'cors',
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept' : 'application/json',
  //       'Origin' : 'http://localhost:19006'
  //     }
  //   }
  // )
  // .then(response => response.json())
  // .then(json => {
  //   setAllTasks(json)
  //   setDisplayTasks(json)
  // })

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
