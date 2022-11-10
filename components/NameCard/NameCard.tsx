import React from 'react';
import { View, HStack, VStack, Text } from 'native-base';
import { styles } from './styles.js';
import { Name } from '../../models/Name.js';
import IconComponent from '../IconComponent';
import { Pressable } from 'react-native';
const NameCard = (props: { name: Name; onAssignCall: any }) => {
  const first = props.name.first;
  const last = props.name.last;
  const name = first + ' ' + last;
  const { onAssignCall } = props;
  return (
    <Pressable onPress={() => onAssignCall()}>
      <View style={styles.card}>
        <VStack p="2" space={0} width="Fill" height="hug">
          <HStack justifyContent="space-between">
            <IconComponent first={first} last={last} />
            <Text>
              <View style={styles.taskHeading} left="40" top="2.5">
                <Text>{name}</Text>
              </View>
            </Text>
          </HStack>
        </VStack>
      </View>
    </Pressable>
  );
};
export default NameCard;
