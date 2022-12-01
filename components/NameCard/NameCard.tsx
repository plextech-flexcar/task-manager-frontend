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
    <Pressable onPress={() => onAssignCall(name)} style={styles.card}>

        <VStack p="2" space={0}>
          <HStack>
            <IconComponent first={first} last={last} />
              <View style={styles.textSpacing}>
                <Text style={styles.taskHeading}>{name}</Text>
              </View>
          </HStack>
        </VStack>
  
    </Pressable>
  );
};
export default NameCard;
