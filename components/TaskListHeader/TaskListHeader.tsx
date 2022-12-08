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
  const [allTasks] = useAtom(allTasksAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const allVehicles = useAtom(allVehiclesAtom);
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    let mva: {[type : number] : string} = {};
    let license: {[type : number] : string} = {};
    allVehicles.forEach((value: Vehicle, key: number) => {
      mva[value.getVehicleId() as number] = value.getMva();
      license[value.getVehicleId() as number] = value.getLicense();
    });
    var pattern = new RegExp(query + '[a-zA-Z0-9]*');
    var matches = [];
    for (let key in mva) {
      if (pattern.test(mva[key])) {
        matches.push(mva[key])
      }
    }
    for (let key in license) {
      if (pattern.test(license[key])) {
        matches.push(license[key])
      }
    }
    displayTasks.forEach((task : Task) => {
      const newDisplayTasks : Task[] = [];
      if (matches.includes(task.vehicleid)) {
        newDisplayTasks.push(task);
      }
      if (matches.includes(task.vehicleid)) {
        newDisplayTasks.push(task);
      }
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
        <Text style={styles.numTasks}>{allTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
