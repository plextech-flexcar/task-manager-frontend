import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { displayTasksAtom, allVehiclesAtom, filteredTasksAtom } from '../../atoms';
import { Task } from "../../models/Task";
import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { useNavigation } from '@react-navigation/native';
import { currUserAtom } from '../../atoms';


export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currUser, setCurrUser] = useAtom(currUserAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const [filteredTasks, setFilteredTasks] = useAtom(filteredTasksAtom);
  const [allVehicles] = useAtom(allVehiclesAtom);
  //populates all of the mvas and licenses of the current tasks
  const mva: { [vehicleId: number]: string } = {};
  const license: {[vehicleId: number]: string } = {};
  for (const vehicleId in allVehicles) {
    const vehicleIdNum = Number.parseInt(vehicleId);
    const vehicle = allVehicles[vehicleIdNum]
    mva[vehicleIdNum] = vehicle.mva;
    license[vehicleIdNum] = vehicle.license;
  }
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    const matches = new Set<number>();
    for (const vehicleId in mva) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      if (pattern.test(mva[vehicleIdNum])) {
        matches.add(vehicleIdNum);
      }
    }
    for (const vehicleId in license) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      if (pattern.test(license[vehicleIdNum])) {
        matches.add(vehicleIdNum);
      }
    }
    const newDisplayTasks : Task[] = [];
    filteredTasks.forEach((task : Task) => {
      if (matches.has(task.vehicleId)) {
        newDisplayTasks.push(task);
      }
      setDisplayTasks(newDisplayTasks);
    })
  };
  const addList = require('../../assets/HeaderIcons/addlist.webp');
  const userIcon = require('../../assets/HeaderIcons/user.webp')
  const navigation = useNavigation();
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image source={userIcon} style={styles.iconSize} />
        <Searchbar
          placeholder="Search tasks"
          placeholderTextColor="#76757D"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBarStyle}
          inputStyle={{ fontSize: 15 }}
        />
        {currUser?.role === 'ASSOCIATE' ? (
          <View style={styles.iconSize}></View>
        ) : (
          <Pressable onPress={() => {navigation.navigate('CreateTaskScreen')}}>
            <Image source={addList} style={styles.iconSize} />
          </Pressable>
          
        )}
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={'Reset '} />
        <Text style={styles.numTasks}>{displayTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
