import { Square } from 'native-base';
import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import { styles } from './styles.js';

export default function FilterBox(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { changeFilter } = props;
  const data = ['Market', 'Task Type', 'Make & Model', 'Status', 'Priority'];

  return (
    <View style={styles.circleRow}>
      {data.map((title) => {
        return (
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
        );
      })}
    </View>
  );
}
