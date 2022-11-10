import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Modal } from 'react-native';
import { HStack, View } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles';
import GenericButton from '../../GenericButton/GenericButton';
import NameListScreen from '../../../screens/NameListScreen/NameListScreen';
import ResolveTask from './ResolveTask';
import ReopenTask from './ReopenTask';
import LeaveComment from './LeaveComment';

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
      <View style={style_temp.centeredView}>
        <ResolveTask
          resolveShowModal={resolveModal}
          onCloseCall={onShowResolveToggle}
          onResolve={onResolve}
        />
      </View>
      <View style={style_temp.centeredView}>
        <ReopenTask
          showModal={reOpenModel}
          closeCall={reopenToggle}
          onSubmit={onSubmit}
        />
      </View>
      <View style={style_temp.centeredView}>
        <LeaveComment showModal={commentModal} onClose={commentToggle} />
      </View>
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

const styles1 = StyleSheet.create({
  centerView: {
    flex: 'display',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderColor: '#2A00A5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonText: {
    color: '#2A00A5',
    fontWeight: '700',
  },
  buttonPurple: {
    textAlign: 'center',
    backgroundColor: '#2A00A5',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextWhite: {
    color: '#FFF',
    fontWeight: '700',
  },
  contain: {
    marginTop: 20,
    marginBottom: 20,
  },
  modal: {
    width: '100%',
    borderBottomWidth: 0,
    textAlign: 'center',
  },
  bottomModal: {
    marginBottom: 0,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
});

const style_temp = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'gray',
    width: '13%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
