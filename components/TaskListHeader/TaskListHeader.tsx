import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { 
  displayTasksAtom, 
  filteredTasksAtom, 
  searchQueryAtom, 
  vehicleIdToLicense, 
  vehicleIdToMVA 
} from '../../atoms';
import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { useNavigation } from '@react-navigation/native';
import { currUserAtom } from '../../atoms';
import { searchFilteredTasks } from '../../utils/searchFilteredTasks'

export default function TaskListHeader() {
  const [currUser, setCurrUser] = useAtom(currUserAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const [filteredTasks, setFilteredTasks] = useAtom(filteredTasksAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [mva] = useAtom(vehicleIdToMVA)
  const [license] = useAtom(vehicleIdToLicense)

  //populates all of the mvas and licenses of the current tasks
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    const newDisplayTasks = searchFilteredTasks(query, mva, license, filteredTasks)
    setDisplayTasks(newDisplayTasks);
  };
  const userIcon = require('../../assets/images/header/user-profile.webp')
  const addList = require('../../assets/images/header/create-task.webp');
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
        <HeaderButtons buttonName={'Reset'} />
        <Text style={styles.numTasks}>{displayTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
