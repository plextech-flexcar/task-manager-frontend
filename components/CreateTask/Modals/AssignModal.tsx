import * as React from 'react';
import {
    Image,
    Text,
    View,
    Pressable,
  } from 'react-native';
import { Modal, FormControl } from 'native-base';
import { styles } from './styles.js';
import { ScrollView } from 'native-base';

const StatusModal = ({
    showModal,
    changeStatus,
    onClose,
  }: {
    showModal: boolean;
    changeStatus: (s: string) => void;
    onClose: () => void;
  }) => {
    
    const status = ['Open', 'Assigned'];
    
    const lastElem = status[1];

    const onPress = (status:string) => {
      changeStatus(status);
      onClose();
    }
  
    return (
          <View>
            <Modal
              _backdrop={{bg: "#2A00A5"}}
              isOpen={showModal}
              onClose={() => onClose()}
              safeAreaTop={true}
              style={styles.modal}
              size={'full'}
            >
              <View style={[styles.modalView, {paddingBottom:83}]}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderTitle}>Status</Text>
                    {/* <Modal.CloseButton
                      variant="#2A00A5"
                      tintColor="#2A00A5"
                      color="#2A00A5"
                      style={{}}
                    /> */}
                </View>
                <View style={[styles.circleRow, {marginTop: 8}]}>
                {status.map((item : string) => {
                    return (
                        <>
                        <View style={styles.makesRow}>
                        <Pressable 
                            style={styles.makesRowPressable} 
                            onPress={() => onPress(item)}
                        >
                            <Text style={styles.priorityText}> {item} </Text>
                        </Pressable>
                        </View>
                        {!(lastElem === item) && <View style={styles.lineSeparator}/>}
                        </>
                        )
                    })}
                </View>
                {/* <View style={{height: 83}}></View> */}
              </View>
            </Modal>
          </View>
      );
  };

  export default StatusModal;
