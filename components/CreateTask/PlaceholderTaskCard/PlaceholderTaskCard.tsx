import React from 'react';
import { Box, View, HStack, VStack, Text } from 'native-base';
import { styles } from './placeholderTaskCardStyles';
import IconComponent from '../../IconComponent';
import { allVehiclesAtom } from '../../../atoms';
import { useAtom } from 'jotai';
import Priority from '../../Icon/Priority';

const PlaceholderTaskCard = ({
  type,
  priority,
  vehicleId,
  assigned,
}: {
  type: string;
  priority: number;
  vehicleId: number;
  assigned: string;
}) => {
  const [allVehicles] = useAtom(allVehiclesAtom);
  const vehicleData = allVehicles[vehicleId];
  return (
    <View style={styles.card}>
      <Box>
        <VStack p="4" space={0} width="full" height="hug">
          <HStack justifyContent="space-between">
            <Text style={type ? styles.taskHeadingBlack : styles.taskHeadingGray}>
              {type ? type : 'Task Type'}
            </Text>
            {priority !== 0 && <Priority priority={priority} />}
          </HStack>
          <Text style={styles.taskDateText}>Today</Text>
          <Text
            style={vehicleId !== -1 ? styles.vehicleBlackText : styles.vehicleGrayText}
          >
            {vehicleId !== -1
              ? vehicleData?.color + vehicleData?.makeName + vehicleData?.modelName
              : 'Vehicle'}
          </Text>
          <HStack justifyContent="space-between">
            <Text
              style={vehicleId !== -1 ? styles.vehicleBlackText : styles.vehicleGrayText}
            >
              {vehicleId !== -1 ? vehicleData?.license : 'License Plate'} •{' '}
              {vehicleId !== -1 ? vehicleData?.mva : 'MVA'}
            </Text>
            <IconComponent
              first={assigned ? assigned.split(' ')[0].charAt(0).toUpperCase() : ''}
              last={assigned ? assigned.split(' ')[1].charAt(0).toUpperCase() : ''}
            />
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};

export default PlaceholderTaskCard;
