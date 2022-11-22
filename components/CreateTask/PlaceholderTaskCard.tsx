import React from 'react';
import { Image } from 'react-native';
import { Box, View, HStack, VStack, Text } from 'native-base';
import  { styles } from './placeholderTaskCardStyles'
import { PRIORITY_ICON_MAP } from '../TaskCard/TaskCardPriorityIconMap';
import { Task } from '../../models/Task.js';
import IconComponent from '../IconComponent';

const PlaceholderTaskCard = ({
        type,
        priority,
        vehicle,
        assigned,
        license,
        mva
    } : {
        type: string,
        priority: number, 
        vehicle: string, 
        assigned: string,   
        license: string, 
        mva: string
    }) => {
    return (
        <View style={styles.card}>
        <Box>
          <VStack p="4" space={0} width="full" height="hug">
            <HStack justifyContent="space-between">
              <View>
                <Text style={type ? styles.taskHeadingBlack : styles.taskHeadingGray}>{type ? type : "Task Type"}</Text>
              </View>
              <Image
                source={PRIORITY_ICON_MAP[priority]}
                style={{ width: 20, height: 20 }}
              />
            </HStack>
            <View>
              <Text style={styles.taskDateText}>Today</Text>
            </View>
            <View>
              <Text style={vehicle ? styles.vehicleBlackText : styles.vehicleGrayText}>{vehicle ? vehicle : "Vehicle"}</Text>
            </View>
            <HStack justifyContent="space-between">
              <View>
                <Text style={license ? styles.vehicleBlackText : styles.vehicleGrayText}>
                  {license ? license : "License Plate"} • {mva ? mva : "MVA"}
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
    )
}

export default PlaceholderTaskCard;