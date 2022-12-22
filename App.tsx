import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { useAtom } from 'jotai';
import {
  allTasksAtom,
  atomFilters,
  displayTasksAtom,
  allVehiclesAtom,
  atomFilterOptions,
  userAtom,
  filteredTasksAtom,
} from './atoms';
import RegisterScreen from './screens/AuthenticationStack/RegisterScreen';
import NavigateScreen from './screens/AuthenticationStack/NavigateScreen';
import CreateTaskScreen from './screens/CreateTaskScreen/CreateTaskScreen'
import LoginScreen from './screens/AuthenticationStack/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Task } from './models/Task';
import { initialFindMakes, initialFindMakeAndModel } from './utils/findTasks';

import { Status } from './models/Status';
import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import { populateVehicles } from './utils/populateVehicles';

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
  const [allVehicles, setAllVehicles] = useAtom(allVehiclesAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const [filteredTasks, setFilteredTasks] = useAtom(filteredTasksAtom)
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  const [filter, setFilter] = useAtom(atomFilters);
  const [user, __] = useAtom(userAtom);

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
    description: 'Go to a body shop TBH. This is kinda screwed',
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
  };

  let makeAndModel = {};
  let makes = {};

  // // Loads dummy tasks without connecting to backend
  // const tasks: Task[] = [task1, task2, task3, task2, task1, task1, task3, task3, task2];
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
        setFilteredTasks(json);
        console.log(json)
        makeAndModel = initialFindMakeAndModel(json);
        makes = initialFindMakes(json);
        filterOptions['Make & Model'] = makeAndModel;
        filter['Make & Model'] = makes;
        setFilterOptions(filterOptions);
        setFilter(filter);
      });
  };
  const getVehicleAPI = async () => {
    fetch('http://localhost:8080/api/v1/vehicle', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setAllVehicles(populateVehicles(response));
      });
  };

  useEffect(() => {
    getTasksAPI();
    getVehicleAPI();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user == null? (
            <>
              <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
              <Stack.Screen name="TaskInfoScreen" component={TaskInfoScreen} />
              <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="NavigateScreen" component={NavigateScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
