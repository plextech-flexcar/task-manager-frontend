import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { atomFilters } from '../../atoms';
import { useAtom } from 'jotai';

export default function SquareCheckBox(props: {
  checkBoxLabel: string;
  filterCategory: string;
}) {
  const [filter, setFilter] = useAtom(atomFilters);
  const checkBoxFilled = () => {
    return filter[filterCategory].includes(checkBoxLabel);
  };
  const { checkBoxLabel, filterCategory } = props;
  const [checked, setChecked] = React.useState(checkBoxFilled());

  const checkFilter = () => {
    setChecked(!checked);
    const newFilter = filter;
    if (!checked) {
      newFilter[filterCategory].push(checkBoxLabel);
    } else {
      const index = newFilter[filterCategory].indexOf(checkBoxLabel);
      if (index > -1) {
        newFilter[filterCategory].splice(index, 1);
      }
    }
    setFilter(newFilter);
  };

  return (
    <Checkbox.Item
      label={checkBoxLabel}
      key={checkBoxLabel}
      position={'leading'}
      status={checked ? 'checked' : 'unchecked'}
      labelStyle={{ textAlign: 'left' }}
      onPress={checkFilter}
      color={'#2A00A5'}
    />
  );
}
