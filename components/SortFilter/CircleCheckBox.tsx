import React from 'react';
import { RadioButton } from 'react-native-paper';
import { View } from 'native-base';
import { atomSorts } from '../../atoms';
import { useAtom } from 'jotai';
import { styles } from './styles.js';
import { Pressable, Text } from 'react-native';

export default function CircleCheckBox() {
  const [sorts, setSorts] = useAtom(atomSorts);

  const data = [
    'Priority: Top to low',
    'Priority: Low to top',
    'Oldest to newest',
    'Newest to oldest',
    'Alphabetical',
  ];

  const changeSorts = (value: string) => {
    setSorts(value);
  };
  const lastElem = data.at(-1);
  return (
    <View style={styles.circleRow}>
        {data.map((title) => {
          return (
            <Pressable onPress={() => changeSorts(title)}>
            <View style={styles.makesRow}>
              <RadioButton.Android
                value={title}
                key={title}
                color={'#2A00A5'}
                status={title === sorts ? 'checked' : 'unchecked'}
              />
              <Text style={styles.filterText}>{title}</Text>
            </View>
            {!(lastElem === title) && <View style={styles.lineSeparator}/>}
            </Pressable>
          );
        })}
    </View>
  );
}
