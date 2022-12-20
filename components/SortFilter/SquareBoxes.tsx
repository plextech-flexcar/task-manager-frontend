import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import SquareCheckBox from './SquareCheckBox';
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
  const lastElem = filterList.at(-1);
  return (
    <View style={styles.circleRow}>
      {filterList.map((title: string) => {
        return (
          <>
            <SquareCheckBox
              checkBoxLabel={title}
              filterCategory={filterCategory}
              key={title}
            />
            {!(lastElem === title) && <View style={styles.lineSeparator}/>}
          </>
        );
      })}
    </View>
  );
}
