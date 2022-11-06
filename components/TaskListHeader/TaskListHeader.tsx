import React from 'react';
import { Text, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';

import HeaderButtons from './HeaderButton';
import { styles } from './styles';

export default function TaskListHeader() {
  const [searchQuery, setSearchQuery] = React.useState('');

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
        <Image
          source={{ uri: require('../../assets/HeaderIcons/addlist.svg') }}
          style={styles.iconSize}
        />
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={'Reset '} />
        <Text style={styles.numTasks}>50 Tasks</Text>
        <HeaderButtons buttonName={'Sort & Filter'} />
      </View>
    </View>
  );
}
