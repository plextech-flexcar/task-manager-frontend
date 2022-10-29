import React from 'react';
import {Image} from 'react-native';
import { Box, View, Stack, HStack, VStack, Heading, Container, Button, Text, Icon, Center } from "native-base";
import {styles} from './styles.js'
import { PRIORITY_ICON_MAP } from "./TaskCardPriorityIconMap"
import { Name } from '../../models/Name.js';

const NameCard = ({
  FullName,
  priority,
}: Name) => {
    return (
      <View style={styles.card}>
 
          <VStack p="2" space={0} width = "Fill" height = "hug">
            <HStack justifyContent= "space-between">
                <Text>
                  <View style={styles.taskHeading} left="40px" top="2.5px">
                    {FullName}
                  </View>
                </Text>
                <Image source={{uri: PRIORITY_ICON_MAP[priority]}} style={{width: 20, height: 20, position:'absolute'}} />
            </HStack>
            <View>
                  <Image source={{uri: require('../../assets/Assigned.svg')}} 
                  style={{width: 27, height: 27}} />
                </View>

          </VStack>
   
      </View>
  )}
export default NameCard
