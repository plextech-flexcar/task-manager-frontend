import * as React from 'react';
import {
    Text,
    View,
    Pressable,
  } from 'react-native';
import { Modal, FormControl } from 'native-base';
import { styles } from './styles.js';
import { useAtom } from 'jotai';
import { atomFilterOptions } from '../../../atoms';
import { ScrollView } from 'native-base';

const TaskTypeModal = ({
    showModal,
    changeTask,
    onClose,
  }: {
    showModal: boolean;
    changeTask: (p: string) => void;
    onClose: () => void;
  }) => {
    
    const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);
   
    let filterList = [];
    filterList = filterOptions["Task Type"];
    const lastElem = filterList.at(-1);

    const onPress = (p:string) => {
      changeTask(p);
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
              <View style={[styles.modalView, {height: "85%"}]}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderTitle}>Task Type</Text>
                    <Modal.CloseButton
                      variant="#2A00A5"
                      tintColor="#2A00A5"
                      color="#2A00A5"
                      style={{}}
                    />
                </View>
                <ScrollView>
                    <View style={[styles.circleRow, {marginTop: 8}]}>
                    {filterList.map((item : string) => {
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
                </ScrollView>
              </View>
            </Modal>
          </View>
      );
  };

  export default TaskTypeModal;
