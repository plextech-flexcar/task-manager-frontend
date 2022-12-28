import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, View, HStack, VStack, Text } from 'native-base';
import { styles } from './styles.js';
import { Task } from '../../models/Task.js';
import { useNavigation } from '@react-navigation/native';
import IconComponent from '../IconComponent';
import { useAtom } from 'jotai';
import { allVehiclesAtom } from '../../atoms';
import Priority from '../Icon/Priority/index';

const TaskCard = ({
  id,
  vehicleId,
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
  const [allVehicles] = useAtom(allVehiclesAtom);
  //change  3 to vehicleid
  const vehicleData = allVehicles[vehicleId];
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const getUserByIdAPI = async () => {
    fetch(`http://localhost:8080/api/v1/user/${assigned}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  };
  const calculateAge = (age: number) => {
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
  if (assigned != null) {
    getUserByIdAPI();
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TaskInfoScreen', {
          id: id,
          vehicleId: vehicleId,
          type: type,
          age: calculateAge(age),
          assigned: user?.firstName + ' ' + user?.lastName,
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
              <Text style={styles.taskDateText}>{calculateAge(age)}</Text>
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
              {assigned != null && (
                <IconComponent
                  first={user ? user.firstName.charAt(0) : ''}
                  last={user ? user.lastName.charAt(0) : ''}
                />
              )}
            </HStack>
          </VStack>
        </Box>
      </View>
    </TouchableOpacity>
  );
};
export default TaskCard;
