import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import NameCardList from '../../components/NameCardList/NameCardList';
import FlatListItemSeparator from '../../components/ItemSeparation';
import { IconButton, Text } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { User } from '../../models/User'

const NameListScreen = ({ closeCall, onAssignCall }: any) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([...users]);
  const getUsersAPI = async () => {
    fetch('http://localhost:8080/api/v1/users', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setSearchedUsers(json);
      });
  };
  useEffect(() => {
    getUsersAPI();
  }, []);
  
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    setSearchedUsers(users.filter((elem: User) => {return pattern.test(elem.firstName + ' ' + elem.lastName)}))
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
