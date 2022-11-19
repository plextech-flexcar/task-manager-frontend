import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Box, View, HStack, VStack, Text } from 'native-base';
import { styles } from './styles.js';
import { PRIORITY_ICON_MAP } from './TaskCardPriorityIconMap';
import { Task } from '../../models/Task.js';
import { useNavigation } from '@react-navigation/native';
import IconComponent from '../IconComponent';
const TaskCard = ({
  id,
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
  vehicleStatus,
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
          id: id,
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
          vehicleStatus: vehicleStatus,
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
          <VStack p="4" space={0} width="full" height="hug">
            <HStack justifyContent="space-between">
              <View>
                <Text style={styles.taskHeading}>{type}</Text>
              </View>
              <Image
                source={{ uri: PRIORITY_ICON_MAP[priority] }}
                style={{ width: 20, height: 20 }}
              />
            </HStack>
            <View>
              <Text style={styles.taskDateText}>{calculateAge(age)}</Text>
            </View>
            <View>
              <Text style={styles.vehicleText}>{model}</Text>
            </View>
            <HStack justifyContent="space-between">
              <View>
                <Text style={styles.vehicleText}>
                  {license} • {mva}
                </Text>
              </View>
              <IconComponent
                first={assigned ? assigned.split(' ')[0].charAt(0) : ''}
                last={assigned ? assigned.split(' ')[1].charAt(0) : ''}
              />
            </HStack>
          </VStack>
        </Box>
      </View>
    </TouchableOpacity>
  );
};
export default TaskCard;
