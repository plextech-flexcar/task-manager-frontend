import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageSourcePropType,
  } from 'react-native';
import { Modal } from 'native-base';
import { styles } from './styles.js';
import Priority, { PRIORITY_MAP } from '../../Icon/Priority/index';

const PriorityModal = ({
    showModal,
    changePriority,
    onClose,
  }: {
    showModal: boolean;
    changePriority: (p: number, t: string, i: ImageSourcePropType) => void;
    onClose: () => void;
  }) => {
    
    const priority = [
      [1, 'Low'],
      [2, 'Normal'],
      [3, 'High'],
      [4, 'Top'],
    ];
    
    const lastElem = priority[3][1];

    const onPress = (p:number, t:string) => {
      const icon = PRIORITY_MAP[p].link;
      changePriority(p, t, icon);
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
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderTitle}>Priority</Text>
                    <Modal.CloseButton
                      variant="#2A00A5"
                      tintColor="#2A00A5"
                      color="#2A00A5"
                      style={{}}
                    />
                </View>
                <View style={[styles.circleRow, {marginTop: 8}]}>
                   {priority.map((pair : (number | string)[]) => {
                      return (
                        <>
                        <View style={styles.makesRow}>
                          <Pressable 
                            style={styles.makesRowPressable} 
                            onPress={() => onPress(pair[0] as number, pair[1] as string)}
                          >
                            <Priority priority={pair[0] as number}/>
                            <Text style={styles.priorityText}> {pair[1]} </Text>
                          </Pressable>
                        </View>
                        {!(lastElem === pair[1]) && <View style={styles.lineSeparator}/>}
                        </>
                        )
                    })}
                </View>
              </View>
            </Modal>
          </View>
      );
  };

  export default PriorityModal;
