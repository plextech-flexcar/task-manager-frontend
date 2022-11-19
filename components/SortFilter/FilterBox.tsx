import * as React from 'react';
import { View } from 'react-native';
import { atomFilterOptions } from '../../atoms';

import { styles } from './styles.js';
import { useAtom } from 'jotai';
import FilterElement from './FilterElement';

export default function FilterBox(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { changeFilter } = props;
  const [filterOptions] = useAtom(atomFilterOptions);
  const lastElem = Object.keys(filterOptions).at(-1);
  
  return (
    <View style={styles.circleRow}>
      {Object.keys(filterOptions).map((title: string) => {
        return (
          <>
          <FilterElement changeFilter={changeFilter} title={title}/>
          {!(lastElem === title) && <View style={styles.lineSeparator}/>}
          </>
        );
      })}
    </View>
  );
}
