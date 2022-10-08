import React from 'react'
import { Box, Stack, HStack, Image, VStack, Heading, Container, Button, Text, Icon } from "native-base";

const TaskCard = () => {
    return (
      <Box width="366px" height = "Hug" rounded="lg" borderColor="violet.400"  //change width to fill later
      borderWidth="1" borderRadius="9px"
      _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "violet.400"
      }}>
        <VStack p="4" space={0} width = "Fill" height = "Hug">
            <HStack justifyContent= "space-between">
                <Text font-family = "Inter" fontSize="17px" fontWeight = "700" color = "#080726">
                 Glass Chip
                </Text>
                <Image  source={{
      uri: "./Users/rhythmseth/Desktop/Plextech/FlexCar/plextech-flexcar-task-manager-frontend/assets/Vector 6.svg"
    }} alt="svg arrow priority"/>
            </HStack>
            <Text font-family = "Inter" fontSize="13px" color= "#76757d" 
            fontWeight="400" >
              3 days old
            </Text> 

            <Text font-family = "Inter" fontSize="15px" color= "#080726" 
            fontWeight="400" >
              Black Land Rover
            </Text> 

            <HStack justifyContent="space-between">
                <Text font-family = "Inter" fontSize="15px" color= "#080726" 
            fontWeight="400" >
              23HJ349, NC • 91884092
                </Text>
                <Image  source={{
      uri: "/Users/rhythmseth/Desktop/Plextech/FlexCar/plextech-flexcar-task-manager-frontend/assets/Vector 6.svg"
    }} alt="assignee circle thing"/>
            </HStack>
        </VStack>
    </Box>
    )
}
export default TaskCard
