import React, { useState } from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import NameCardList from '../../components/NameCardList/NameCardList';
import FlatListItemSeparator from '../../components/ItemSeparation';
import { IconButton, Text } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { User } from '../../models/User'
import { allUsersAtom } from '../../atoms';
import { useAtom } from 'jotai';

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const [users] = useAtom(allUsersAtom);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedUsers, setSearchedUsers] = useState(Object.values(users));
  
  
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    setSearchedUsers(Object.values(users).filter((elem: User) => {return pattern.test(elem.firstName + ' ' + elem.lastName)}))
  }
  return (
    <SafeAreaView style={styles.view}>
      <Pressable style={styles.icon}>
        <IconButton icon="close" color="#2A00A5" size={20} onPress={() => closeCall()} />
      </Pressable>
      <Text style={styles.text}>Assign Tasks</Text>
      <Searchbar
        placeholder="Search users"
        placeholderTextColor="#76757D"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        inputStyle={{ fontSize: 15 }}
    />
      <FlatListItemSeparator />
      <NameCardList users={searchedUsers} onAssignCall={onAssignCall} />
    </SafeAreaView>

  );
};

export default NameListScreen;
