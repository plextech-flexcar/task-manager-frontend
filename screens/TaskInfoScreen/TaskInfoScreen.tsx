import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import TaskInfoHeader from '../../components/TaskInfo/TaskInfoHeader';
import { HStack, VStack, Divider } from 'native-base';
import { styles } from './TaskInfoStyles.js';
import { PRIORITY_ICON_MAP } from '../../components/TaskCard/TaskCardPriorityIconMap';
import { Status } from '../../models/Status';
const TaskInfoScreen = ({ route }) => {
  const {
    type,
    status,
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
    vehicleStatus,
    carImage,
    description,
    state,
    vin,
  } = route.params;
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };
  const fromEpochToDate = (date) => {
    const newDate = new Date(date * 1000);
    return newDate.toLocaleString();
  };

  const statusVar = (status) => {
    if(status === Status.OPEN){
      return "Status: OPEN"
      
    }
    else if(status === "RESOLVE"){
      return 'Status: assigned to ' + assigned
    }    
  };
  return (
    <SafeAreaView style={styles.whitebg}>
      <TaskInfoHeader />
      <Divider />
      <View style={styles.headermt}>
        <View style={styles.headerHorizontalStack}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {type} {model}
            </Text>
          </View>

          <View style={styles.mrView}>
            <Image
              source={PRIORITY_ICON_MAP[priority]}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.priorityTop}>Top</Text>
          </View>
        </View>

        <Text style={styles.textDate}>{age}</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>
              {statusVar(status)}
            </Text>
            {assigned && status !== Status.OPEN ? (
              <View style={styles.assignBox}>
                <Text style={styles.assignBoxText}>{getInitials(assigned)}</Text>
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
            <View style={vehicleStatus ? styles.availableBox : styles.unavailableBox}>
              <Text>{vehicleStatus ? 'Available' : 'Unavailable/Service'}</Text>
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
            <Text style={styles.commentBox}>{comment ? comment : 'No comments'}</Text>
            <Text style={styles.commentBy}>by Adam Miller on 3/15/22 - 4:30pm</Text>
          </VStack>
        </HStack>
        <HStack>
          <Divider orientation="vertical" mr={3} mt={5} />
          <VStack marginTop={5}>
            <Text style={styles.commentBox}>{comment ? comment : 'No comments'}</Text>
            <Text style={styles.commentBy}>by Adam Miller on 3/15/22 - 4:30pm</Text>
          </VStack>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default TaskInfoScreen;
