import React from 'react';
import {View, ListRenderItem } from 'react-native';
import NameCard from '../NameCard/NameCard';
import { Name } from '../../models/Name';
import FlatListItemSeparator from '../ItemSeparation';
import { styles } from './styles';
import { FlatList } from 'native-base';
const NameCardList = (props: { name: Name[]; onAssignCall: any }) => {
  const { name } = props;
  const { onAssignCall } = props;

  const renderNameCard: ListRenderItem<Name> = ({ item }) => {
    return <NameCard name={item} onAssignCall={onAssignCall} />;
  };

  return (
      <FlatList
        data={name}
        renderItem={renderNameCard}
        ItemSeparatorComponent={FlatListItemSeparator}
        style={styles.box}
      />
  );
};

export default NameCardList;
