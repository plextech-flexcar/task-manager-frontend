import React from 'react'
import Svg from 'react-native-svg';
import {Image} from 'react-native';
import { Box, View, Stack, HStack, VStack, Heading, Container, Button, Text, Icon } from "native-base";
import {styles} from '../styles.js'

const TaskCard = () => {
    return (
      <View style={styles.card}>
        <Box>
        <VStack p="4" space={0} width = "Fill" height = "Hug">
            <HStack justifyContent= "space-between">
                <Text>
                  <View style={styles.taskHeading}>
                 Glass Chip
                  </View>
                </Text>
                <Image source={{uri: require('../../assets/Vector6.svg')}}
       style={{width: 20, height: 20}} />
            </HStack>
            <Text>
            <View style={styles.taskDateText}>
              3 days old
              </View>
            </Text> 
            <Text>
            <View style={styles.vehicleText}>
              Black Land Rover
              </View>
            </Text> 
            <HStack justifyContent="space-between">
            <Text>
              <View style={styles.vehicleText}> 
              23HJ349, NC • 91884092
              </View>
                </Text>
                <Box >
                <View style={styles.userBox}> 
                <Image source={{uri: require('../../assets/Assigned.svg')}}
       style={{width: 20, height: 20}} />
       </View>
       </Box>
    </HStack>
        </VStack>
    </Box>
      </View>
  )}
export default TaskCard
