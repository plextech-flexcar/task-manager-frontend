import React from "react";
import { Image } from "react-native";
import {
  Box,
  View,
  Stack,
  HStack,
  VStack,
  Heading,
  Container,
  Button,
  Text,
  Icon,
  Center,
} from "native-base";
import { styles } from "./styles.js";
import { PRIORITY_ICON_MAP } from "./TaskCardPriorityIconMap";
import { Task } from "../../models/Task.js";

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
      <Box style={{ width: "100%" }}>
        <VStack p="4" space={0} width="Fill" height="Hug">
          <HStack justifyContent="space-between">
            <View>
              <Text style={styles.taskHeading}>{taskTitle}</Text>
            </View>
            <Image
              source={{ uri: PRIORITY_ICON_MAP[priority] }}
              style={{ width: 20, height: 20 }}
            />
          </HStack>
          <View>
            <Text style={styles.taskDateText}>{taskAge} days old</Text>
          </View>
          <View>
            <Text style={styles.vehicleText}>{carModel}</Text>
          </View>
          <HStack justifyContent="space-between">
            <View>
              <Text style={styles.vehicleText}>
                {licensePlate} • {mva}
              </Text>
            </View>
            <View>
              <Image
                source={{ uri: require("../../assets/Assigned.svg") }}
                style={{ width: 27, height: 27 }}
              />
            </View>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};
export default TaskCard;
