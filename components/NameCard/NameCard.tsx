import React from 'react';
import { View, HStack, VStack, Text } from 'native-base';
import { styles } from './styles.js';
import { Name } from '../../models/Name.js';
import IconComponent from '../IconComponent';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NameCard = ({ first, last }: Name) => {
  const fullName = first + ' ' + last;
  const navigation = useNavigation();
  console.log(fullName);
  return (
    <Pressable>
      <View style={styles.card}>
        <VStack p="2" space={0} width="Fill" height="hug">
          <HStack justifyContent="space-between">
            <IconComponent first={first} last={last} />
            <Text>
              <View style={styles.taskHeading} left="40px" top="2.5px">
                {fullName}
              </View>
            </Text>
          </HStack>
        </VStack>
      </View>
    </Pressable>
  );
};
export default NameCard;
