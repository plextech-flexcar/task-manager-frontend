import React from 'react';
import { View } from 'react-native';

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 0.5,
        width: '97%',
        display: 'flex',
        alignSelf: 'flex-end',
        backgroundColor: 'lightgrey',
      }}
    />
  );
};
export default FlatListItemSeparator;
