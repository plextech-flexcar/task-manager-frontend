import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from './styles';
import { allUsersAtom } from '../../atoms';
import { useAtom } from 'jotai';
import { User } from '../../models/User'

export default function AssignModalFunc() {
  const [users] = useAtom(allUsersAtom);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedUsers, setSearchedUsers] = useState(Object.values(users));

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    setSearchedUsers(Object.values(users).filter((elem: User) => {return pattern.test(elem.firstName + ' ' + elem.lastName)}))
  };
  return (
    <Searchbar
      placeholder="Search users"
      placeholderTextColor="#76757D"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
      inputStyle={{ fontSize: 15 }}
    />
  );
}
