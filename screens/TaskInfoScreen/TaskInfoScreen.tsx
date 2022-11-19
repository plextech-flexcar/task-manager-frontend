import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import TaskInfoHeader from '../../components/TaskInfo/TaskInfoHeader';
import { HStack, VStack, Divider } from 'native-base';
import { styles } from './TaskInfoStyles.js';
import { PRIORITY_ICON_MAP } from '../../components/TaskCard/TaskCardPriorityIconMap';
import { Status } from '../../models/Status';
import TaskInfoPopup from '../../components/TaskInfo/Modals/TaskInfoPopup';
import { PRIORITY_ICON_COLOR_MAP } from './TaskCardPriorityColorMap';
const TaskInfoScreen = ({ route }) => {
  const {
    id,
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
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };
  const fromEpochToDate = (date: number) => {
    const newDate = new Date(date * 1000);
    return newDate.toLocaleString();
  };

  const statusVar = (status) => {
    if (status === Status.OPEN) {
      return 'Status: OPEN';
    } else if (status === Status.RESOLVE) {
      return 'Status: assigned to ' + assigned;
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

          <View style={styles.priorityView}>
            <Image source={PRIORITY_ICON_MAP[priority]} style={styles.priorityImage} />
            <Text style={{ color: PRIORITY_ICON_COLOR_MAP[priority] }}>
              {getPriority(priority)}
            </Text>
          </View>
        </View>

        <Text style={styles.textDate}>{age}</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>{statusVar(status)}</Text>
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
          <Text>Using a windshield repair kit: </Text>
          <Text style={styles.vehicleMarginTop}>{description}</Text>
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
          <TaskInfoPopup style={{}} assigned={assigned} taskId={id} />
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default TaskInfoScreen;
