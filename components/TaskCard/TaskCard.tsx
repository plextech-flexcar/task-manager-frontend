import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, View, HStack, VStack, Text } from 'native-base';
import { styles } from './styles.js';
import { Task } from '../../models/Task.js';
import { useNavigation } from '@react-navigation/native';
import IconComponent from '../IconComponent';
import { useAtom } from 'jotai';
import { allUsersAtom, allVehiclesAtom } from '../../atoms';
import Priority from '../Icon/Priority/index';

const TaskCard = ({
  id,
  vehicleId,
  type,
  date,
  priority,
  assigned,
  status,
  description,
  creator
}: Task) => {
  const [allVehicles] = useAtom(allVehiclesAtom);
  const [allUsers] = useAtom(allUsersAtom);
  const vehicleData = allVehicles[vehicleId];
  const assignedUser = allUsers[assigned]
  const navigation = useNavigation();
  const calculateAge = (age?: number) => {
    if (!age) {
      return null
    }
    const minutes = Math.floor(age / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (minutes < 60) {
      return minutes === 1 ? '1 minute old' : minutes + ' minutes old';
    } else if (hours < 24) {
      return hours === 1 ? '1 hour old' : hours + ' hours old';
    }
    return days === 1 ? '1 day old' : days + ' days old';
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TaskInfoScreen', {
          id,
          vehicleId,
          type,
          date,
          description,
          priority,
          assigned,
          status,
          creator
        })
      }
      style={styles.card}
    >
      <View>
        <Box>
          <VStack p="4" space={0} width="full">
            <HStack justifyContent="space-between">
              <Box width="70%">
                <View>
                  <Text style={styles.taskHeading}>{type}</Text>
                </View>
              </Box>
              <Priority priority={priority} />
            </HStack>
            <View>
              <Text style={styles.taskDateText}>{calculateAge(Date.now() - date)}</Text>
            </View>
            <View>
              <Text style={styles.vehicleText}>
                {vehicleData?.color} {vehicleData?.makeName} {vehicleData?.modelName}
              </Text>
            </View>
            <HStack justifyContent="space-between">
              <View>
                <Text style={styles.vehicleText}>
                  {vehicleData?.license}, {vehicleData?.state} • {vehicleData?.mva}
                </Text>
              </View>
              {assigned !== -1 ? (
                <IconComponent
                  first={assignedUser ? assignedUser.firstName.charAt(0).toUpperCase() : ''}
                  last={assignedUser ? assignedUser.lastName.charAt(0).toUpperCase() : ''}
                />
               ) : (
                <View></View>
              )} 
            </HStack>
          </VStack>
        </Box>
      </View>
    </TouchableOpacity>
  );
};
export default TaskCard;
