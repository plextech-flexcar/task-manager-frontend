import { View } from 'native-base';
import React from 'react';
import { Image, ImageSourcePropType, Text } from 'react-native';
import styles from './styles';

/**
 * A mapping for every priority level that provides the name, URI link, and color.
 */
export const PRIORITY_MAP: {
  [key: number]: { name: string; link: ImageSourcePropType; color: string };
} = {
  1: {
    name: 'Low',
    link: require('../../../assets/images/priority/low.webp'),
    color: '#3591ES',
  },
  2: {
    name: 'Normal',
    link: require('../../../assets/images/priority/normal.webp'),
    color: '#E53935',
  },
  3: {
    name: 'High',
    link: require('../../../assets/images/priority/high.webp'),
    color: '#E53935',
  },
  4: {
    name: 'Top',
    link: require('../../../assets/images/priority/top.webp'),
    color: '#E53935',
  },
};

/**
 * This Priority component is only an icon to be displayed with an optional name attached to it.
 */
const Priority = (props: { priority: number; showName?: boolean }) => {
  return (
    <View style={styles.priorityView}>
      {props.priority !== 0 && (
        <>
          <Image
            source={PRIORITY_MAP[props.priority].link}
            style={styles.priorityImage}
          />
          {props.showName && (
            <Text style={{ color: PRIORITY_MAP[props.priority].color }}>
              {PRIORITY_MAP[props.priority].name}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default Priority;
