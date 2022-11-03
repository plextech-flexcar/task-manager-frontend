import React from "react";
import { Image, TouchableOpacity } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
const TaskCard = ({
  id,
  vehicleid,
  type,
  //taskTitle: string;
  date,
  // taskAge: number;
  comment,
  make,
  model,
  // carModel: string;]
  color,
  license,
  mva,
  priority,
  age,
  assigned,
  market,
  status,
  createdBy,
  carImage,
  description,
  state,
  vin,
}: Task) => {
  // let userNameArray = user.split(" ");
  // let firstInitial = userNameArray[0].charAt(0);
  // let lastInitial = userNameArray[1].charAt(0);
  const navigation = useNavigation();
  const calculateAge = (age: number) => {
    const minutes = Math.floor(age / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (minutes < 60) {
      return minutes == 1 ? "1 minute old" : minutes + " minutes old";
    } else if (hours < 24) {
      return hours == 1 ? "1 hour old" : hours + " hours old";
    }
    return days == 1 ? "1 day old" : hours + " days old";
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TaskInfoScreen", {
          type: type,
          age: calculateAge(age),
          assigned: assigned,
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
          carImage: carImage,
          description: description,
          state: state,
          vin: vin,
        })
      }
    >
      <View style={styles.card}>
        <Box>
          <VStack p="4" space={0} width="Fill" height="Hug">
            <HStack justifyContent="space-between">
              <View style={styles.taskHeading}>
                <Text>{type}</Text>
              </View>
              <Image
                source={{ uri: PRIORITY_ICON_MAP[priority] }}
                style={{ width: 20, height: 20 }}
              />
            </HStack>
            <View style={styles.taskDateText}>
              <Text>{calculateAge(age)}</Text>
            </View>
            <View style={styles.vehicleText}>
              <Text>{model}</Text>
            </View>
            <HStack justifyContent="space-between">
              <View style={styles.vehicleText}>
                <Text>
                  {license} • {mva}
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
    </TouchableOpacity>
  );
};
export default TaskCard;
