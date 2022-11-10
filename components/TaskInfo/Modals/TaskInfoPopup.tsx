import React, { useState } from 'react';
import { Alert, SafeAreaView, Modal } from 'react-native';
import { HStack, View } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles';
import GenericButton from '../../GenericButton/GenericButton';
import NameListScreen from '../../../screens/NameListScreen/NameListScreen';
import ResolveTask from './ResolveTask';
import ReopenTask from './ReopenTask';
import LeaveComment from './LeaveComment';
import { styles1 } from './taskInfoPopupStyles';
const TaskInfoPopup = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { assigned } = props;
  const [resolve, setResolve] = useState(assigned !== '');
  const [resolveModal, setResolveModal] = useState(false);
  const [finalResolve, setFinalResolve] = useState(false);
  const [reOpenModel, setReopenModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const onAssign = () => {
    setShowModal(!showModal);
    setResolve(!resolve);
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

  const personSearch = require('../../../assets/person_search.png');
  return (
    <SafeAreaView style={styles.whitebg}>
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowModal(!showModal);
          }}
          presentationStyle="fullScreen"
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
      <LeaveComment showModal={commentModal} onClose={commentToggle} />
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