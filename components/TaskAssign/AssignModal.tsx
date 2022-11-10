import React from 'react';
import { Searchbar } from 'react-native-paper';

export default function AssignModalFunc() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Search users"
      placeholderTextColor="#76757D"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        width: 382,
        height: '40px',
        backgroundColor: '#FFFFFF',
        left: '1px',
        borderWidth: '2px',
        borderRadius: '8px',
        borderColor: '#2A00A5',
        bottom: '16px',
        top: '1px',
        marginBottom: '16px',
      }}
      inputStyle={{ fontSize: 15 }}
    />
  );
}
