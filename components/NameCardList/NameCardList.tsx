import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import NameCard from '../NameCard/NameCard';
import { Name } from '../../models/Name';
import FlatListItemSeparator from '../ItemSeparation';
import { styles } from './styles';

const NameCardList = (props: { name: Name[]; onAssignCall: any }) => {
  const { name } = props;
  const { onAssignCall } = props;

  const renderNameCard: ListRenderItem<Name> = ({ item }) => {
    return <NameCard name={item} onAssignCall={onAssignCall} />;
  };

  return (
    <View>
      <FlatList
        data={name}
        renderItem={renderNameCard}
        style={styles.box}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

export default NameCardList;
