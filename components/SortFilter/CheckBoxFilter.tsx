import { Square } from 'native-base';
import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { HStack } from 'native-base';

import { styles } from './styles.js';
import { atomFilterOptions, atomFilters } from '../../atoms';
import { useAtom } from 'jotai';

export default function CheckBoxFilter(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
  filterCategory: string;
}) {
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  const [filter, setFilter] = useAtom(atomFilters)
  const { changeFilter, filterCategory } = props;
  const checkCurrentState = () => {
    filter['Make & Model'][filterCategory]
  }
  const [checkType, setCheckType] = React.useState(checkCurrentState());
  const checkboxChangeState = () => {
    if (checkType === 'unchecked') {
      setCheckType('checked');
    } else {
      setCheckType('unchecked');
    }
  };
  return (
    <View style={styles.circleRow}>
      {Object.keys(filterOptions['Make & Model']).map((title: string) => {
        return (
          <HStack>
            <Checkbox
              label={title}
              key={title}
              position={'leading'}
              status={checkType}
              onPress={checkboxChangeState}
              color={'#2A00A5'}
            />
            <TouchableOpacity
              key={title}
              onPress={() => changeFilter(title)}
              style={styles.filterRow}
            >
              <Text style={styles.filterText}>{title}</Text>
              <Image
                source={require('../../assets/next.png')}
                style={{ height: 15, width: 15 }}
              ></Image>
            </TouchableOpacity>
          </HStack>
        );
      })}
    </View>
  );
}
