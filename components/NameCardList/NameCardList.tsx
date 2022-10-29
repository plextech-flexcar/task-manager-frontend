import React from 'react';
import { 
    View, 
    FlatList, 
    ListRenderItem
 } from 'react-native';
 import NameCard from '../NameCard/NameCard';
 import { Name } from '../../models/Name';
import { background, border, space } from 'native-base/lib/typescript/theme/styled-system';
import FlatListItemSeparator from '../ItemSeperation';

 const NameCardList = (props: {
    name: Name[]
 }) => {
    let {name} = props;

    const renderNameCard: ListRenderItem<Name>= ({ item }) => {
        return (
            <NameCard {...item} />
        )
    }

    return (
        <View>
            <FlatList
                data={name}
                renderItem={renderNameCard}
                style={{width: '100%', height:'110%', borderRadius:10, borderWidth:"1px", borderStyle:"solid",borderColor:"white", left:"1px"}}
                ItemSeparatorComponent={FlatListItemSeparator}
                
            />
        </View>
    )
}

export default NameCardList