import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import TaskInfoHeader from "../../components/TaskInfo/TaskInfoHeader";
import { HStack, VStack, Divider } from "native-base";
import { styles } from "./TaskInfoStyles.js";

const TaskInfoScreen = ({}) => {
  return (
    <SafeAreaView style={styles.whitebg}>
      <TaskInfoHeader />
      <Divider />
      <View style={styles.headermt}>
        <View style={styles.headerHorizontalStack}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              Glass Chip: Rear Window Passenger's side
            </Text>
          </View>

          <View style={styles.mrView}>
            <Image source={require("../../assets/vector.png")} />
            <Text style={styles.priorityTop}>Top</Text>
          </View>
        </View>

        <Text style={styles.textDate}>3 Days old</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>
              Status: Assigned to Elias Charalambides
            </Text>
            <View style={styles.assignBox}>
              <Text style={styles.assignBoxText}>EC</Text>
            </View>
          </HStack>
        </View>
        <Text style={[styles.textTop, styles.viewMarginLeft]}>
          Created by: Adam Miller on 3/15/22 - 4:28pm
        </Text>
      </View>

      <View style={styles.middleBox}>
        <View style={styles.middleHorizontalStack}>
          <View>
            <Text style={styles.textCarType}>White Honda Civic 2020</Text>
            <Text style={styles.textTop}>23HJ349, NC MVA: 91884092</Text>
            <Text style={styles.textTop}>VIN: SHSRD78775Y233242</Text>
            <View style={styles.unavailableBox}>
              <Text>Unavialble/Servicer</Text>
            </View>
          </View>
          <Image
            style={styles.imageMarginRight}
            source={require("../../assets/car.png")}
          />
        </View>
        <Divider style={styles.vehicleDivider} />
        <VStack style={styles.vehicleVerticalStack}>
          <Text>Using a windshied repair kit: </Text>
          <Text style={styles.vehicleMarginTop}>
            1. Remove the broken glass
          </Text>
          <Text style={styles.vehicleMarginTop}>2. Clean the area</Text>
          <Text style={styles.vehicleMarginTop}>3. Apply the adhesive</Text>
          <Text style={styles.vehicleMarginTop}>4. Apply the glass</Text>
        </VStack>
      </View>
      <VStack style={styles.commentVStack}>
        <Text style={styles.vehicleMarginTop}>4 Comments</Text>
        <HStack>
          <Divider orientation="vertical" mr={3} />
          <VStack>
            <Text style={styles.commentBox}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ante felis, placerat in dapibus nec, consectetur sit amet nunc.
              Integer nec accumsan metus.
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
