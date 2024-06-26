import React, { useState } from 'react';
import { Alert, SafeAreaView, Modal } from 'react-native';
import { HStack, View } from 'native-base';
import GenericButton from '../../GenericButton/GenericButton';
import NameListScreen from '../../../screens/NameListScreen/NameListScreen';
import ResolveTask from './ResolveTask/ResolveTask';
import ReopenTask from './ReopenTask/ReopenTask';
import LeaveComment from './LeaveComment/LeaveComment';
import { styles1 } from './TaskInfoPopupStyles';
import { User } from '../../../models/User';
import { useAtom } from 'jotai';
import { allTasksAtom, currUserAtom } from '../../../atoms';
const TaskInfoPopup = (
  {
    assigned,
    taskId,
    comments,
    setComments,
  } : {
    assigned: number,
    taskId: number|undefined,
    comments: number[],
    setComments: React.Dispatch<React.SetStateAction<never[]>>
  }) => {
  const [showModal, setShowModal] = useState(false);
  const [resolve, setResolve] = useState(assigned !== -1);
  const [resolveModal, setResolveModal] = useState(false);
  const [finalResolve, setFinalResolve] = useState(false);
  const [reOpenModel, setReopenModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [tasks, setTasks] = useAtom(allTasksAtom);
  const [currUser] = useAtom(currUserAtom)

  const onAssign = (user: User) => {
    setShowModal(!showModal);
    setResolve(!resolve);
    putAssignAPI(user);
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.assigned = user.id;
      }
      return task;
    });
    setTasks(newTasks);
  };
  const putAssignAPI = async (user: User) => {
    fetch(`http://localhost:8080/api/v1/assign/${taskId}`, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
      body: JSON.stringify(user),
    });
  };
  const onShowToggle = () => {
    setShowModal(!showModal);
  };
  const onShowResolveToggle = () => {
    setResolveModal(!resolveModal);
  };
  const onResolve = () => {
    setFinalResolve(true);
    setResolveModal(false);
  };
  const resolveToggle = () => {
    setResolveModal(!resolveModal);
  };
  const reopenToggle = () => {
    setReopenModal(!reOpenModel);
  };
  const onSubmit = () => {
    setReopenModal(!reOpenModel);
    setResolve(false);
  };
  const commentToggle = () => {
    setCommentModal(!commentModal);
  };

  const personSearch = require('../../../assets/images/navigation/person-search.webp');
  return (
    <SafeAreaView>
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowModal(!showModal);
          }}
          presentationStyle='pageSheet'
        >
          <NameListScreen closeCall={onShowToggle} onAssignCall={onAssign} />
        </Modal>
      </View>
      <ResolveTask
        resolveShowModal={resolveModal}
        onCloseCall={onShowResolveToggle}
        onResolve={onResolve}
      />
      <ReopenTask showModal={reOpenModel} closeCall={reopenToggle} onSubmit={onSubmit} />
      <LeaveComment
        showModal={commentModal}
        onClose={commentToggle}
        taskId={taskId}
        postedBy={currUser?.firstName + ' ' + currUser?.lastName}
        comments={comments}
        setComments={setComments}
      />
      <View style={styles1.contain}>
        {!resolveModal ? (
          <HStack space={3} alignItems="center" justifyContent={'center'}>
            <GenericButton
              isPurple={false}
              text={'COMMENT'}
              functionCall={() => commentToggle()}
            />
            {resolve ? (
              <GenericButton
                isPurple={true}
                text={finalResolve ? 'REOPEN' : 'RESOLVE'}
                functionCall={finalResolve ? reopenToggle : resolveToggle}
              />
            ) : (
              <GenericButton
                isPurple={true}
                imageSource={personSearch}
                text={'ASSIGN'}
                functionCall={onShowToggle}
              />
            )}
          </HStack>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
export default TaskInfoPopup;
