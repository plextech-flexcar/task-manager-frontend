import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import SquareCheckBox from './SquareCheckbox';
import { useAtom } from 'jotai';
import { atomFilterOptions } from '../../atoms';
import { styles } from './styles.js';

export default function SquareBoxes(props: { filterCategory: string }) {
  const { filterCategory } = props;
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  let filterList = [];
  if (filterCategory in filterOptions) {
    filterList = filterOptions[filterCategory];
  } else {
    filterList = filterOptions['Make & Model'][filterCategory];
  }

  return (
    <View style={styles.boxRow}>
      {filterList.map((title: string) => {
        return (
          <SquareCheckBox
            checkBoxLabel={title}
            filterCategory={filterCategory}
            key={title}
          />
        );
      })}
    </View>
  );
}
