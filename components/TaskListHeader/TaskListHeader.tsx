import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { allTasksAtom } from '../../atoms';
import HeaderButtons from './HeaderButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { useNavigation } from '@react-navigation/native';

export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [allTasks] = useAtom(allTasksAtom);
  const navigation = useNavigation();
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image
          source={{ uri: require('../../assets/HeaderIcons/user.svg') }}
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
        <Pressable onPress={() => navigation.navigate('CreateTaskScreen', {})}>
          <Image
          source={{ uri: require('../../assets/HeaderIcons/addlist.svg') }}
          style={styles.iconSize}
        />
        </Pressable>
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={'Reset '} />
        <Text style={styles.numTasks}>{allTasks.length} Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
