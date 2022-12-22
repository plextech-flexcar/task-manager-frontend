import React, { useState } from 'react';
import { Alert, SafeAreaView, Modal } from 'react-native';
import { HStack, View } from 'native-base';
import GenericButton from '../../GenericButton/GenericButton';
import NameListScreen from '../../../screens/NameListScreen/NameListScreen';
import ResolveTask from './ResolveTask/ResolveTask';
import ReopenTask from './ReopenTask/ReopenTask';
import LeaveComment from './LeaveComment/LeaveComment';
import { styles1 } from './TaskInfoPopupStyles';
const TaskInfoPopup = (
  {
    assigned,
    taskId,
    comments,
    setComments,
  } : {
    assigned: string,
    taskId: number,
    comments: number[],
    setComments: React.Dispatch<React.SetStateAction<never[]>>
  }) => {
  const [showModal, setShowModal] = useState(false);
  const [resolve, setResolve] = useState(assigned !== '');
  const [resolveModal, setResolveModal] = useState(false);
  const [finalResolve, setFinalResolve] = useState(false);
  const [reOpenModel, setReopenModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [assignedName, setAssignedName] = useState('');
  const onAssign = (name: string) => {
    setShowModal(!showModal);
    setResolve(!resolve);
    setAssignedName(name);
    putAssignAPI(name);
  };
  const putAssignAPI = async (name: string) => {
    fetch(`http://localhost:8080/api/v1/assign/${taskId}`, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:19006',
      },
      body: JSON.stringify({ name: name }),
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

  const personSearch = require('../../../assets/person_search.webp');
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
        postedBy={'User Name'}
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
