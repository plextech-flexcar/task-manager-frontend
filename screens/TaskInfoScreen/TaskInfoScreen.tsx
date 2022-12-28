import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Divider, VStack, HStack } from 'native-base';
import TaskInfoHeader from '../../components/TaskInfo/TaskInfoHeader';
import TaskInfoPopup from '../../components/TaskInfo/Modals/TaskInfoPopup';
import { styles } from './TaskInfoStyles.js';
import { allVehiclesAtom } from '../../atoms';
import { useAtom } from 'jotai';
import { Status } from '../../models/Status';
import { Comment } from '../../models/Comment';
import Priority from '../../components/Icon/Priority/index';

const TaskInfoScreen = ({ route }) => {
  const {
    id,
    type,
    status,
    vehicleId,
    age,
    assigned,
    createdBy,
    date,
    model,
    priority,
    vehicleStatus,
    description,
  } = route.params;
  const [allVehicles] = useAtom(allVehiclesAtom);
  //change  3 to vehicleid
  console.log("HIII")
  console.log(vehicleId)
  const vehicleData = allVehicles[vehicleId];
  const [comments, setComments] = useState([]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };
  const fromEpochToDate = (date: number) => {
    return new Date(date).toLocaleString();
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
  console.log('COMMENTS: ', comments);
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

          <Priority priority={priority} showName={true}/>
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
              {vehicleData?.color} {vehicleData?.makeName} {vehicleData?.modelName}
            </Text>
            <Text style={styles.textTop}>
              {vehicleData?.license}, {vehicleData?.state} • {vehicleData?.mva}
            </Text>
            <Text style={styles.textTop}>VIN: {vehicleData?.vin}</Text>
            <View style={vehicleStatus ? styles.availableBox : styles.unavailableBox}>
              <Text>{vehicleStatus ? 'Available' : 'Unavailable/Service'}</Text>
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
