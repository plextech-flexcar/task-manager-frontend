import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { atomFilters } from '../../atoms';
import { useAtom } from 'jotai';
import { Text, Pressable } from 'react-native';
import { styles } from './styles.js';

export default function SquareCheckBox(props: {
  checkBoxLabel: string;
  filterCategory: string;
}) {
  const { checkBoxLabel, filterCategory } = props;
  const [filter, setFilter] = useAtom(atomFilters);
  const isMake = !(filterCategory in filter);
  const tempFilter = filter;
  const checkBoxFilled = () => {
    if (isMake) {
      return tempFilter['Make & Model'][filterCategory].includes(checkBoxLabel);
    }
    return tempFilter[filterCategory].includes(checkBoxLabel);
  };
  const [checked, setChecked] = React.useState(checkBoxFilled());

  const checkFilter = () => {
    if (isMake) {
      if (!checked) {
        tempFilter['Make & Model'][filterCategory].push(checkBoxLabel);
      } else {
        const index = tempFilter['Make & Model'][filterCategory].indexOf(checkBoxLabel);
        if (index > -1) {
          tempFilter['Make & Model'][filterCategory].splice(index, 1);
        }
      }
    } else {
      if (!checked) {
        tempFilter[filterCategory].push(checkBoxLabel);
      } else {
        const index = tempFilter[filterCategory].indexOf(checkBoxLabel);
        if (index > -1) {
          tempFilter[filterCategory].splice(index, 1);
        }
      }
    }
    setFilter(tempFilter);
    setChecked(checkBoxFilled());
  };

  return (
    <Pressable style={styles.makesRow} onPress={checkFilter}>
      <Checkbox.Android
      key={checkBoxLabel}
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor={'#2A00A5'}
      color={'#2A00A5'}
    />
      <Text style={styles.filterText}>{checkBoxLabel}</Text>
    </Pressable>
  );
}
