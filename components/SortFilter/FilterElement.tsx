import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from './styles.js';
import { atomFilters } from '../../atoms';
import { useAtom } from 'jotai';


const FilterElement= (props: {
    changeFilter: React.Dispatch<React.SetStateAction<any>>,
    title:string
  }) => {
    const [filter] = useAtom(atomFilters);
    const { changeFilter, title } = props;
    const nextArrow = require('../../assets/images/navigation/next-arrow.webp');
    const filterVector = require('../../assets/images/navigation/filter-select.webp');
    let hasFilter = filter[title].length > 0;
    if (title === 'Make & Model') {
      Object.values(filter['Make & Model']).forEach(makeArray => {
        if ((makeArray as Array<string>).length > 0) {
          hasFilter = true;
        }
      });
    }
    return (
        <TouchableOpacity
            key={title}
            onPress={() => changeFilter(title)}
            style={styles.filterRow}
          >
            <View style={styles.filterVector}>
              {hasFilter && <Image
                source={filterVector}
                style={{ height: 14, width: 19}}
              ></Image>}
              <Text style={styles.filterText}>{title}</Text>
            </View>
            <Image
              source={nextArrow}
              style={{ height: 15.5, width: 8.5 }}
            ></Image>
          </TouchableOpacity>
    )
    
};

export default FilterElement;