import { Square } from 'native-base';
import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { atomFilterOptions } from '../../atoms';

import { styles } from './styles.js';
import { useAtom } from 'jotai';

export default function FilterBox(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { changeFilter } = props;
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  const lastElem = Object.keys(filterOptions).at(-1)
  return (
    <View style={styles.circleRow}>
      {Object.keys(filterOptions).map((title: string) => {
        return (
          <>
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
          {!(lastElem === title) && <View style={styles.lineSeparator}/>}
          </>
        );
      })}
    </View>
  );
}
