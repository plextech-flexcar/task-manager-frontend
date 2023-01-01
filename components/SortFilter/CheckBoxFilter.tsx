import * as React from 'react';
import {  View } from 'react-native';

import { styles } from './styles.js';
import { atomFilterOptions } from '../../atoms';
import { useAtom } from 'jotai';
import MakeCheckbox from './MakeCheckbox';

export default function CheckBoxFilter(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
  const { changeFilter } = props;
  const lastElem = Object.keys(filterOptions['Make & Model']).pop();
  return (
    <View style={styles.circleRow}>
      {Object.keys(filterOptions['Make & Model']).map((title: string) => {
        return (
          <>
          <MakeCheckbox title = {title} changeFilter = {changeFilter}/>
            {!(lastElem === title) ? <View style={styles.lineSeparator}/> : <></>}
          </>
        );
      })}
    </View>
  );
}
