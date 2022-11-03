import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import TaskInfoHeader from "../../components/TaskInfo/TaskInfoHeader";
import { HStack, VStack, Divider } from "native-base";
import { styles } from "./TaskInfoStyles.js";

const TaskInfoScreen = ({ route, navigation }) => {
  const topPriorityImage = require("../../assets/vector.png");
  const {
    type,
    age,
    assigned,
    createdBy,
    date,
    comment,
    make,
    model,
    color,
    license,
    mva,
    priority,
    status,
    carImage,
    description,
    state,
    vin,
  } = route.params;
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };
  const fromEpochToDate = (date) => {
    var newDate = new Date(date * 1000);
    return newDate.toLocaleString();
  };
  console.log(route.params);
  return (
    <SafeAreaView style={styles.whitebg}>
      <TaskInfoHeader />
      <Divider />
      <View style={styles.headermt}>
        <View style={styles.headerHorizontalStack}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{type}</Text>
          </View>

          <View style={styles.mrView}>
            <Image source={topPriorityImage} />
            <Text style={styles.priorityTop}>Top</Text>
          </View>
        </View>

        <Text style={styles.textDate}>{age}</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>
              {assigned ? "Status: Assigned to " + assigned : "Open"}
            </Text>
            {assigned ? (
              <View style={styles.assignBox}>
                <Text style={styles.assignBoxText}>
                  {getInitials(assigned)}
                </Text>
              </View>
            ) : null}
          </HStack>
        </View>
        <Text style={[styles.textTop, styles.viewMarginLeft]}>
          Created by: {createdBy} on {fromEpochToDate(date)}
        </Text>
      </View>

      <View style={styles.middleBox}>
        <View style={styles.middleHorizontalStack}>
          <View>
            <Text style={styles.textCarType}>
              {color} {make}
            </Text>
            <Text style={styles.textTop}>
              {license}, {state} MVA: {mva}
            </Text>
            <Text style={styles.textTop}>VIN: {vin}</Text>
            <View style={status ? styles.avialbleBox : styles.unavailableBox}>
              <Text>{status ? "Available" : "Unavialble/Service"}</Text>
            </View>
          </View>
          <Image style={styles.image} source={{ uri: carImage }} />
        </View>
        <Divider style={styles.vehicleDivider} />
        <VStack style={styles.vehicleVerticalStack}>
          <Text>Using a windshied repair kit: </Text>
          <Text style={styles.vehicleMarginTop}>{description}</Text>
          {/* <Text style={styles.vehicleMarginTop}>2. Clean the area</Text>
          <Text style={styles.vehicleMarginTop}>3. Apply the adhesive</Text>
          <Text style={styles.vehicleMarginTop}>4. Apply the glass</Text> */}
        </VStack>
      </View>
      <VStack style={styles.commentVStack}>
        <Text style={styles.vehicleMarginTop}>4 Comments</Text>
        <HStack>
          <Divider orientation="vertical" mr={3} />
          <VStack>
            <Text style={styles.commentBox}>
              {comment ? comment : "No comments"}
            </Text>
            <Text style={styles.commentBy}>
              by Adam Miller on 3/15/22 - 4:30pm
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Divider orientation="vertical" mr={3} mt={5} />
          <VStack marginTop={5}>
            <Text style={styles.commentBox}>
              {comment ? comment : "No comments"}
            </Text>
            <Text style={styles.commentBy}>
              by Adam Miller on 3/15/22 - 4:30pm
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default TaskInfoScreen;