import { border } from 'native-base/lib/typescript/theme/styled-system';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export default function AssignModalFunc() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Search Tasks"
      placeholderTextColor="#76757D"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        width: 382,
        height: 30,
        backgroundColor: '#FFFFFF',
        left: '1px',
      }}
      inputStyle={{ fontSize: 15 }}
    />
  );
}
