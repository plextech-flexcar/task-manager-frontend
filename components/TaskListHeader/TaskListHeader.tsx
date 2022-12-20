import React from 'react';
import { Text, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { allTasksAtom, displayTasksAtom } from '../../atoms';
import { allVehiclesAtom } from '../../atoms';
import { Task } from "../../models/Task";
import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { Vehicle } from '../../models/Vehicle';
const user = require('../../assets/HeaderIcons/user.webp');
const addList = require('../../assets/HeaderIcons/addlist.webp');

export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const [allVehicles] = useAtom(allVehiclesAtom);
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    console.log(query)
    const mva: { [vehicleId: number]: string } = {};
    const license: {[vehicleId: number]: string } = {};
    for(const vehicleId in allVehicles) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      const vehicle = allVehicles[vehicleIdNum]
      mva[vehicleIdNum] = vehicle.mva;
      license[vehicleIdNum] = vehicle.license;
    }
    console.log(mva)
    const pattern = new RegExp(query + '[a-zA-Z0-9]*');
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
    console.log(matches)
    const newDisplayTasks : Task[] = [];
    displayTasks.forEach((task : Task) => {
      console.log(task.vehicleId)
      console.log(matches)
      console.log(matches.has(task.vehicleId))
      if (matches.has(task.vehicleId)) {
        newDisplayTasks.push(task);
      }
      console.log("New Display Tasks")
      console.log(newDisplayTasks)
      setDisplayTasks(newDisplayTasks);
    })
    //logic after u type a single letter
    //updating displaytasksAtom after implementing the search stuff on displayTasks
  };
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image
          source={user}
          style={styles.iconSize}
        />
        <Searchbar
          placeholder="Search tasks"
          placeholderTextColor="#76757D"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBarStyle}
          inputStyle={{ fontSize: 15 }}
        />
        <Image
          source={addList}
          style={styles.iconSize}
        />
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={'Reset '} />
        <Text style={styles.numTasks}>{displayTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
