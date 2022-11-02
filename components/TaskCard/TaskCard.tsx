import React from 'react';
import { Image } from 'react-native';
import {
  Box,
  View,
  HStack,
  VStack,
  Text,
} from 'native-base';
import { styles } from './styles.js';
import { PRIORITY_ICON_MAP } from './TaskCardPriorityIconMap';
import { Task } from '../../models/Task.js';

const TaskCard = ({
  taskTitle,
  taskAge,
  carModel,
  licensePlate,
  mva,
  priority,
}: Task) => {
  return (
    <View style={styles.card}>
      <Box style={{ width: '100%' }}>
        <VStack p="4" space={0} width="Fill" height="Hug">
          <HStack justifyContent="space-between">
            <View style={styles.taskHeading}>
              <Text>{taskTitle}</Text>
            </View>
            <Image
              source={{ uri: PRIORITY_ICON_MAP[priority] }}
              style={{ width: 20, height: 20 }}
            />
          </HStack>
          <View style={styles.taskDateText}>
            <Text>{taskAge} days old</Text>
          </View>
          <View style={styles.vehicleText}>
            <Text>{carModel}</Text>
          </View>
          <HStack justifyContent="space-between">
            <View style={styles.vehicleText}>
              <Text>
                {licensePlate} • {mva}
              </Text>
            </View>
            <View>
              <Image
                source={{ uri: require('../../assets/Assigned.svg') }}
                style={{ width: 27, height: 27 }}
              />
            </View>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};
export default TaskCard;
