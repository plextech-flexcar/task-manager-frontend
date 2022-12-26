import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { useAtom } from 'jotai';
import {
  allTasksAtom,
  atomFilters,
  displayTasksAtom,
  allVehiclesAtom,
  atomFilterOptions,
  currUserAtom,
  filteredTasksAtom,
  allUsersAtom,
} from './atoms';
import RegisterScreen from './screens/AuthenticationStack/RegisterScreen';
import NavigateScreen from './screens/AuthenticationStack/NavigateScreen';
import CreateTaskScreen from './screens/CreateTaskScreen/CreateTaskScreen'
import LoginScreen from './screens/AuthenticationStack/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initialFindMakes, initialFindMakeAndModel } from './utils/findTasks';

import TaskInfoScreen from './screens/TaskInfoScreen/TaskInfoScreen';
import TaskListScreen from './screens/TaskListScreen/TaskListScreen';
import { populateVehicles } from './utils/populateVehicles';
import { populateUsers } from './utils/populateUsers';

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
  const [allUsers, setAllUsers] = useAtom(allUsersAtom);
  const [filter, setFilter] = useAtom(atomFilters);
  const [currUser, __] = useAtom(currUserAtom);

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
        console.log("TASKS: ", json)
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
      .then((json) => {
        console.log(json)
        setAllVehicles(populateVehicles(json));
      });
  };
  const getUsersAPI = async () => {
    fetch('http://localhost:8080/api/v1/users', {
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
        setAllUsers(populateUsers(json));
      });
  };

  useEffect(() => {
    getTasksAPI();
    getVehicleAPI();
    getUsersAPI();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* CHANGE THIS TO USER */}
          {currUser == null ? (
            <>
              <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
              <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
              <Stack.Screen name="TaskInfoScreen" component={TaskInfoScreen} />
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
