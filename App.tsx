import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import { useAtom } from 'jotai';
import { allTasksAtom, displayTasksAtom } from './atoms';

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

export default function App() {
  const [allTasks, setAllTasks] = useAtom(allTasksAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);

  // fetch('localhost:8080/api/v1/task')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setAllTasks(data);
  //     setDisplayTasks(data);
  //     console.log(allTasks);
  //     console.log(displayTasks);
  //   });

  return (
    <NativeBaseProvider>
      <TaskListScreen />
    </NativeBaseProvider>
  );
}
