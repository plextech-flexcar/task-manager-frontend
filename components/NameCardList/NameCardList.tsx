import React from 'react';
import { ListRenderItem } from 'react-native';
import NameCard from '../NameCard/NameCard';
import FlatListItemSeparator from '../ItemSeparation';
import { styles } from './styles';
import { FlatList } from 'native-base';
import { User } from '../../models/User';
const NameCardList = (props: { users: User[]; onAssignCall: any }) => {
  const { users } = props;
  const { onAssignCall } = props;

  const renderNameCard: ListRenderItem<User> = ({ item }) => {
    return <NameCard user={item} onAssignCall={onAssignCall} />;
  };

  return (
    <FlatList
      data={users}
      renderItem={renderNameCard}
      ItemSeparatorComponent={FlatListItemSeparator}
      style={styles.box}
    />
  );
};

export default NameCardList;
