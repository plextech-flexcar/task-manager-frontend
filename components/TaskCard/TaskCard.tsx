import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, View, HStack, VStack, Text, Image } from 'native-base';
import { styles } from './styles.js';
import { PRIORITY_ICON_MAP } from './TaskCardPriorityIconMap';
import { Task } from '../../models/Task.js';
import { useNavigation } from '@react-navigation/native';
import IconComponent from '../IconComponent';
const TaskCard = ({
  type,
  date,
  comment,
  make,
  model,
  color,
  license,
  mva,
  priority,
  age,
  assigned,
  market,
  status,
  createdBy,
  carImage,
  description,
  state,
  vin,
}: Task) => {
  const navigation = useNavigation();
  const calculateAge = (age: number) => {
    const minutes = Math.floor(age / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (minutes < 60) {
      return minutes === 1 ? '1 minute old' : minutes + ' minutes old';
    } else if (hours < 24) {
      return hours === 1 ? '1 hour old' : hours + ' hours old';
    }
    return days === 1 ? '1 day old' : hours + ' days old';
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TaskInfoScreen', {
          type: type,
          age: calculateAge(age),
          assigned: assigned,
          createdBy: createdBy,
          date: date,
          comment: comment,
          make: make,
          model: model,
          color: color,
          license: license,
          mva: mva,
          priority: priority,
          status: status,
          carImage: carImage,
          description: description,
          state: state,
          vin: vin,
        })
      }
      style={styles.card}
    >
      <View>
        <Box>
          <VStack p="4" space={0} width="Fill" height="Hug">
            <HStack justifyContent="space-between">
              <View style={styles.taskHeading}>
                <Text>{type}</Text>
              </View>
              <Image
                source={{ uri: PRIORITY_ICON_MAP[priority] }}
                style={{ width: 20, height: 20 }}
                alt="top"
              />
            </HStack>
            <View style={styles.taskDateText}>
              <Text>{calculateAge(age)}</Text>
            </View>
            <View style={styles.vehicleText}>
              <Text>{model}</Text>
            </View>
            <HStack justifyContent="space-between">
              <View style={styles.vehicleText}>
                <Text>
                  {license} • {mva}
                </Text>
              </View>
              <IconComponent first = {assigned ? assigned.split(' ')[0].charAt(0) : ""} last = {assigned ? assigned.split(' ')[1].charAt(0) : ""} />
            </HStack>
          </VStack>
        </Box>
      </View>
    </TouchableOpacity>
  );
};
export default TaskCard;