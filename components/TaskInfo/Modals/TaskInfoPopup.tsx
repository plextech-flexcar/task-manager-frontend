import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Modal } from 'react-native';
import { HStack, Text, View, Image } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles';
import GenericButton from '../../GenericButton/GenericButton';
import NameListScreen from '../../../screens/NameListScreen/NameListScreen';

const TaskInfoPopup = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { assigned } = props;
  // const [assignPress, setAssignPress] = useState(false);
  const [resolve, setResolve] = useState(assigned !== '');

  const onAssign = () => {
    setShowModal(!showModal);
    setResolve(!resolve);
  };

  const onShowToggle = () => {
    setShowModal(!showModal);
  };
  const personSearch = require('../../../assets/person_search.png');
  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={style_temp.centeredView}>
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
      <View style={styles1.contain}>
        <HStack space={3} alignItems="center" justifyContent={'center'}>
          <GenericButton isPurple={false} text={'COMMENT'} />
          {resolve ? (
            <GenericButton isPurple={true} text={'RESOLVE'} />
          ) : (
            <GenericButton
              isPurple={true}
              imageSource={personSearch}
              text={'ASSIGN'}
              functionCall={onShowToggle}
              assignCall={onAssign}
            />
          )}
        </HStack>
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
