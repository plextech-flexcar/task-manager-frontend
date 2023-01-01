import React from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from './styles';
export default function AssignModalFunc() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    
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
