import React from 'react';
import { Text, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { allTasksAtom, userAtom } from '../../atoms';
import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { Box, Spacer } from 'native-base';
const user = require('../../assets/HeaderIcons/user.webp');
const addList = require('../../assets/HeaderIcons/addlist.webp');
export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [allTasks] = useAtom(allTasksAtom);
  const [user, setUser] = useAtom(userAtom);
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  console.log('user', user?.role);
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image source={user} style={styles.iconSize} />
        <Searchbar
          placeholder="Search tasks"
          placeholderTextColor="#76757D"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBarStyle}
          inputStyle={{ fontSize: 15 }}
        />
        {user?.role === 'ASSOCIATE' ? (
          <View style={styles.iconSize}></View>
        ) : (
          <Image source={addList} style={styles.iconSize} />
        )}
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={'Reset '} />
        <Text style={styles.numTasks}>{allTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
