import React from 'react'
import Svg from 'react-native-svg';
import {Image} from 'react-native';
import { Box, View, Stack, HStack, VStack, Heading, Container, Button, Text, Icon } from "native-base";
import {styles} from '../styles.js'
import { PRIORITY_ICON_MAP } from "./TaskCardPriorityIconMap"
import { Task } from '../../models/task.js';

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
        <Box>
          <VStack p="4" space={0} width = "Fill" height = "Hug">
            <HStack justifyContent= "space-between">
                <Text>
                  <View style={styles.taskHeading}>
                    {taskTitle}
                  </View>
                </Text>
                <Image source={{uri: PRIORITY_ICON_MAP[priority]}} style={{width: 20, height: 20}} />
            </HStack>
            <Text>
              <View style={styles.taskDateText}>
                {taskAge} days old
              </View>
            </Text> 
            <Text>
              <View style={styles.vehicleText}>
                {carModel}
              </View>
            </Text> 
            <HStack justifyContent="space-between">
              <Text>
                <View style={styles.vehicleText}> 
                  {licensePlate} • {mva}
                </View>
              </Text>
              <Box>
                <Image source={{uri: require('../../assets/Assigned.svg')}} style={{width: 27, height: 27}} />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </View>
  )}

export default TaskCard
