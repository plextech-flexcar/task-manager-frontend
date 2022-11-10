import React, { useEffect } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import { useAtom } from 'jotai';
import { allTasksAtom, displayTasksAtom } from './atoms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NameListScreen from './screens/NameListScreen/NameListScreen';

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
  const getTasksAPI = async () => {
    fetch('http://localhost:8080/api/v1/task', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setAllTasks(json);
        setDisplayTasks(json);
      });
  };

  useEffect(() => {
    getTasksAPI();
    console.log(allTasks);
  }, []);

  return (
    <NativeBaseProvider>
    <NameListScreen/>
  </NativeBaseProvider>
  )
}