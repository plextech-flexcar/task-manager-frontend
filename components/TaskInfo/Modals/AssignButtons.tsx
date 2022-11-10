import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HStack, Text, View, Image } from "native-base";
import { styles } from "../../../screens/TaskInfoScreen/TaskInfoStyles.js";

const onPress = () => {};
const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(true);

const TaskInfoPopup = (props) => {
  const { assigned } = props
  const [showModal, setShowModal] = useState(false);
  const [resolve, setResolve] = useState(assigned !== '');
  const onPressFunction = () => {
    setShowModal(!showModal);
    setResolve(!resolve);
  };
  const personSearch = require('../../../assets/person_search.png')
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
        >
          <NameListScreen />
          <View style={styles1.centerView}>
            <Pressable
              style={[style_temp.button, style_temp.buttonClose]}
              onPress={() => onPressFunction()}
            >
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
      <View style={styles1.contain}>
        <HStack space={3} alignItems="center" justifyContent={'center'}>
        <GenericButton isPurple={false} text={'COMMENT'} />
          { resolve ? <GenericButton isPurple={true} text={'RESOLVE'} /> :
            <GenericButton isPurple={true} imageSource={personSearch} text={'ASSIGN'} />
          }
          
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
