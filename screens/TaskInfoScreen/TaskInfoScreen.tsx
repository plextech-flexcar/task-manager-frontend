import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Divider, VStack, HStack } from 'native-base';
import TaskInfoHeader from '../../components/TaskInfo/TaskInfoHeader';
import TaskInfoPopup from '../../components/TaskInfo/Modals/TaskInfoPopup';
import { styles } from './TaskInfoStyles.js';
import { PRIORITY_ICON_MAP } from '../../components/TaskCard/TaskCardPriorityIconMap';
import { PRIORITY_ICON_COLOR_MAP } from './TaskCardPriorityColorMap';
import { allUsersAtom, allVehiclesAtom } from '../../atoms';
import { useAtom } from 'jotai';
import { Status } from '../../models/Status';
import { Comment } from '../../models/Comment';
const TaskInfoScreen = ({ route }) => {
  const {
    id,
    vehicleId,
    type,
    date,
    description,
    priority,
    assigned,
    status,
    creator
  } = route.params;
  const [allVehicles] = useAtom(allVehiclesAtom);
  const [allUsers] = useAtom(allUsersAtom);
  const creatorUser = allUsers[creator]
  const assignedUser = allUsers[assigned]
  const vehicleData = allVehicles[vehicleId];
  const [comments, setComments] = useState([]);

  const calculateAge = (age?: number) => {
    if (!age) {
      return null
    }
    const minutes = Math.floor(age / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (minutes < 60) {
      return minutes === 1 ? '1 minute old' : minutes + ' minutes old';
    } else if (hours < 24) {
      return hours === 1 ? '1 hour old' : hours + ' hours old';
    }
    return days === 1 ? '1 day old' : days + ' days old';
  };

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
      .map((n) => n[0].toUpperCase())
      .join('');
  };
  const fromEpochToDate = (date: number) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
  };

  const statusVar = (status: Status) => {
    if (status === Status.OPEN) {
      return 'Status: OPEN';
    } else if (status === Status.RESOLVE) {
      return 'Status: assigned to ' + assigned;
    }
  };

  const getCommentsAPI = async (taskId: number) => {
    fetch(`http://localhost:8080/api/v1/comment/${taskId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
  };

  useEffect(() => {
    getCommentsAPI(id);
  }, []);
  return (
    <SafeAreaView style={styles.whitebg}>
      <TaskInfoHeader />
      <Divider />
      <View style={styles.headermt}>
        <View style={styles.headerHorizontalStack}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              {type} {vehicleData?.modelName}
            </Text>
          </View>

          <View style={styles.priorityView}>
            <Image source={PRIORITY_ICON_MAP[priority]} style={styles.priorityImage} />
            <Text style={{ color: PRIORITY_ICON_COLOR_MAP[priority] }}>
              {getPriority(priority)}
            </Text>
          </View>
        </View>

        <Text style={styles.textDate}>{calculateAge(Date.now() - date)}</Text>
        <View style={styles.viewMarginLeft}>
          <HStack>
            <Text style={styles.textTop}>{statusVar(status)}</Text>
            {assigned !== -1 && status !== statusVar(Status.OPEN) ? (
              <View style={styles.assignBox}>
                <Text style={styles.assignBoxText}>{getInitials(assignedUser.firstName + ' ' + assignedUser.lastName)}</Text>
              </View>
            ) : null}
          </HStack>
        </View>
        <Text style={[styles.textTop, styles.viewMarginLeft]}>
          Created by: {creatorUser.firstName + ' ' + creatorUser.lastName} on {fromEpochToDate(date)}
        </Text>
      </View>

      <View style={styles.middleBox}>
        <View style={styles.middleHorizontalStack}>
          <View>
            <Text style={styles.textCarType}>
              {vehicleData?.color} {vehicleData?.makeName} {vehicleData?.modelName}
            </Text>
            <Text style={styles.textTop}>
              {vehicleData?.license}, {vehicleData?.state} • {vehicleData?.mva}
            </Text>
            <Text style={styles.textTop}>VIN: {vehicleData?.vin}</Text>
            <View style={vehicleData.vehicleStatus ? styles.availableBox : styles.unavailableBox}>
              <Text>{vehicleData.vehicleStatus ? 'Available' : 'Unavailable/Service'}</Text>
            </View>
          </View>
          <Image style={styles.image} source={{ uri: vehicleData?.carImage }} />
        </View>
        <Divider style={styles.vehicleDivider} />
        <VStack style={styles.vehicleVerticalStack}>
          <Text>Using a windshield repair kit: </Text>
          <Text style={styles.vehicleMarginTop}>{description}</Text>
        </VStack>
      </View>
      <VStack style={styles.commentVStack}>
        <Text style={styles.vehicleMarginTop}>{comments.length} Comments</Text>
        {comments.map((comment: Comment) => (
          <HStack mt={4}>
            <Divider orientation="vertical" mr={3} />
            <VStack>
              <Text style={styles.commentBox}>{comment.content}</Text>
              <Text style={styles.commentBy}>
                by {comment.postedBy} on {fromEpochToDate(comment.date)}
              </Text>
            </VStack>
          </HStack>
        ))}
        <View style={{ marginRight: '5%', marginLeft: '5%' }}>
        <TaskInfoPopup
            assigned={assigned}
            taskId={id}
            comments={comments}
            setComments={setComments}
          />
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default TaskInfoScreen;
