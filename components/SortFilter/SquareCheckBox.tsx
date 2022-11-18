import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { atomFilterOptions, atomFilters } from '../../atoms';
import { useAtom } from 'jotai';

export default function SquareCheckBox(props: {
  checkBoxLabel: string;
  filterCategory: string;
}) {
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
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
    <Checkbox.Item
      label={checkBoxLabel}
      key={checkBoxLabel}
      position={'leading'}
      status={checked ? 'checked' : 'unchecked'}
      labelStyle={{ textAlign: 'left' }}
      onPress={checkFilter}
      uncheckedColor={'#2A00A5'}
      color={'#2A00A5'}
    />
  );
}
