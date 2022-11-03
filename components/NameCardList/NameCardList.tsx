import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import NameCard from '../NameCard/NameCard';
import { Name } from '../../models/Name';
import FlatListItemSeparator from '../ItemSeperation';
import { styles } from './styles';

const NameCardList = (props: { name: Name[] }) => {
  const { name } = props;

  const renderNameCard: ListRenderItem<Name> = ({ item }) => {
    return <NameCard {...item} />;
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
