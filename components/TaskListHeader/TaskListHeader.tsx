import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TaskListScreen from '../../screens/TaskListScreen/TaskListScreen';
import TaskCardList from '../TaskCardList/TaskCardList';
import { allTasksAtom } from '../../atoms';

import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';

export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [allTasks] = useAtom(allTasksAtom);
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image
          source={require('../../assets/HeaderIcons/user.webp') }
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
          source={require('../../assets/HeaderIcons/addlist.webp')}
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
