import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import { View } from 'native-base';
import { atomSorts } from '../../atoms';
import { useAtom } from 'jotai';
import { styles } from './styles.js';

export default function CircleCheckBox() {
  const [sorts, setSorts] = useAtom(atomSorts);
  const [value, setValue] = React.useState(sorts);

  const data = [
    'Priority: Top to low',
    'Priority: Low to top',
    'Oldest to newest',
    'Newest to oldest',
    'Alphabetical',
  ];

  const changeSorts = (value: string) => {
    setValue(value);
    setSorts(value);
  };

  return (
    <View style={styles.circleRow}>
      <RadioButton.Group onValueChange={changeSorts} value={value}>
        {data.map((title) => {
          return (
            <RadioButton.Item
              label={title}
              value={title}
              key={title}
              position={'leading'}
              labelStyle={{ textAlign: 'left' }}
              color={'#2A00A5'}
            />
          );
        })}
      </RadioButton.Group>
    </View>
  );
}
