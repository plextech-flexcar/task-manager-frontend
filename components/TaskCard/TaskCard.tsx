import React from 'react'
import { Box, View, Stack, HStack, Image, VStack, Heading, Container, Button, Text, Icon } from "native-base";
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
                <Image  source={require('../../assets/Vector6.png')}/>
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
                <Image  source={require('../../assets/Vector6.png')}/>
    </HStack>
        </VStack>
    </Box>
      </View>
  )}
export default TaskCard
