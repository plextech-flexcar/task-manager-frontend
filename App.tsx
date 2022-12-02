import React, { useEffect } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { useAtom } from 'jotai';
import { allTasksAtom, atomFilters, displayTasksAtom } from './atoms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NameListScreen from './screens/NameListScreen/NameListScreen';
import RegisterScreen from './/screens/RegisterScreen/RegisterScreen'

import { Task } from './models/Task';
import { initialFindMakes, initialFindMakeAndModel } from './utils/findTasks';
import { createMakeAndModelFilter } from './utils/createMakeAndModelFilter';
import { atomFilterOptions } from './atoms';
import { Status } from './models/Status';
import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import AssignModalFunc from './components/TaskAssign/AssignModal';


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
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  const [filter, setFilter] = useAtom(atomFilters)

  const task1: Task = {
    id: 4,
    vehicleid: 4,
    date: 1667185142,
    type: 'Glass Chip',
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
    market: 'Atlanta',
    status: Status.ASSIGNED,
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
    type: 'Low tread',
    description:
      'Using a windshield repair kit, you can remove the broken glass and replace it with a new piece of glass, and clean the area, apply the adhesive.',
    comment: 'Pls finish ASAP',
    make: 'Ayo',
    model: 'Hello',
    color: 'Magenta',
    license: 'qjt7Bi',
    mva: 'R436542',
    age: 1667271542,
    assigned: 'Elias Charambides',
    market: 'Atlanta',
    status: Status.RESOLVE,
    createdBy: 'Willium Hopkin',
    carImage:
      'https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-very-good-car-honda-civic-10.png',
    state: 'NC',
    vin: 'vy6si92Chj',
    priority: 4,
  };
  const task3: Task = {
    id: 5,
    vehicleid: 4,
    date: 1667185142,
    type: 'Body damage/Collision',
    description:
      'Go to a body shop TBH. This is kinda screwed',
    comment: 'Uh Oh',
    make: 'Ayo',
    model: 'Hello2',
    color: 'Magenta',
    license: 'qjt7Bi',
    mva: 'R436598',
    age: 1667271542,
    assigned: '',
    market: 'Wisconsin',
    status: Status.OPEN,
    createdBy: 'Denver Nguyen',
    carImage:
      'https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-very-good-car-honda-civic-10.png',
    state: 'NC',
    vin: 'vy6si92Chj',
    priority: 4,
  }


  let makeAndModel = {};
  let makes = {};

  // Loads dummy tasks without connecting to backend
  // const tasks: Task[] = [task1, task2, task3, task2, task1];
  // useEffect(() => {
  //   setDisplayTasks(tasks);
  //   setAllTasks(tasks);
  //   makeAndModel = initialFindMakeAndModel(tasks);
  //   makes = initialFindMakes(tasks);
  //   filterOptions['Make & Model'] = makeAndModel;
  //   filter['Make & Model'] = makes;
  //   setFilterOptions(filterOptions);
  //   setFilter(filter);
  // }, []);

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
        makeAndModel = initialFindMakeAndModel(json);
        makes = initialFindMakes(json);
        filterOptions['Make & Model'] = makeAndModel;
        filter['Make & Model'] = makes;
        setFilterOptions(filterOptions);
        setFilter(filter);
      });
  };

  useEffect(() => {
    getTasksAPI();
    console.log(allTasks);
  }, []);

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