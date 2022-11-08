import React, { useEffect } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import { useAtom } from 'jotai';
import { allTasksAtom, displayTasksAtom } from './atoms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Task } from './models/Task';
import { createMakeAndModelFilter } from './utils/createMakeAndModelFilter';

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

  const task1: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Passenger's side",
    description:
      'Using a windshield repair kit, you can remove the broken glass and replace it with a new piece of glass, and clean the area, apply the adhesive.',
    comment: 'Pls finish ASAP',
    make: 'Skoda',
    model: 'Rapid',
    color: 'Magenta',
    license: 'qjt7Bi',
    mva: 'R436542',
    age: 1667271542,
    assigned: 'Elias Charambides',
    market: 'Wisconsin',
    status: true,
    createdBy: 'Willium Hopkin',
    carImage:
      'https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-very-good-car-honda-civic-10.png',
    state: 'NC',
    vin: 'vy6si92Chj',
    priority: 4,
  };
  const task2: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: "Glass Chip: Rear Window Passenger's side",
    description:
      'Using a windshield repair kit, you can remove the broken glass and replace it with a new piece of glass, and clean the area, apply the adhesive.',
    comment: 'Pls finish ASAP',
    make: 'ayo',
    model: 'HELLo',
    color: 'Magenta',
    license: 'qjt7Bi',
    mva: 'R436542',
    age: 1667271542,
    assigned: 'Elias Charambides',
    market: 'Wisconsin',
    status: true,
    createdBy: 'Willium Hopkin',
    carImage:
      'https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-very-good-car-honda-civic-10.png',
    state: 'NC',
    vin: 'vy6si92Chj',
    priority: 4,
  };

  const tasks: Task[] = [
    task1,
    task2,
    task1,
    task2,
    task1,
  ];

  // Loads dummy tasks without connecting to backend
  useEffect(() => {
    setDisplayTasks(tasks);
    setAllTasks(tasks);
  }, []);


  // fetch(
  //   "http://localhost:8080/api/v1/task",
  //   {
  //     mode: 'cors',
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Origin': 'http://localhost:19006',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setAllTasks(json);
  //       setDisplayTasks(json);
  //     });
  // };

  // useEffect(() => {
  //   getTasksAPI();
  //   console.log(allTasks);
  // }, []);

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
