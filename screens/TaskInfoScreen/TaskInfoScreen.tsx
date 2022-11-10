import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import TaskInfoHeader from '../../components/TaskInfo/TaskInfoHeader';
import { HStack, VStack, Divider, Container } from 'native-base';
import { styles } from './TaskInfoStyles.js';
import { PRIORITY_ICON_MAP } from '../../components/TaskCard/TaskCardPriorityIconMap';
import TaskInfoPopup from '../../components/TaskInfo/Modals/TaskInfoPopup';
const TaskInfoScreen = ({ route }) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const getPriority = (priority: number) => {
    if (priority === 1) {
      return 'Low';
    } else if (priority === 2) {
      return 'Normal';
    } else if (priority === 3) {
      return 'High';
    } else {
      return 'Top';
    }
  };
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
            <Text style={styles.priorityTop}>{getPriority(priority)}</Text>
          </View>
        </View>

        <Text style={styles.textDate}>{age}</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>
              {assigned ? 'Status: Assigned to ' + assigned : 'Open'}
            </Text>
            {assigned ? (
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
            <View style={status ? styles.avialbleBox : styles.unavailableBox}>
              <Text>{status ? 'Available' : 'Unavialble/Service'}</Text>
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
        <View style={{ marginRight: '5%', marginLeft: '5%' }}>
          <TaskInfoPopup style={{}} assigned={assigned} />
        </View>
      </VStack>
      {/* <View style={{marginRight: "5%", marginLeft: "5%"}}>
        <AssignButtons style={{}} assigned = {assigned} />
      </View> */}
    </SafeAreaView>
  );
};

export default TaskInfoScreen;
