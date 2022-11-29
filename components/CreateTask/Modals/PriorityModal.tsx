import * as React from 'react';
import {
    Image,
    Text,
    View,
    Pressable,
  } from 'react-native';
import { Modal, FormControl } from 'native-base';
import { styles } from './styles.js';
import { PRIORITY_ICON_MAP } from '../../TaskCard/TaskCardPriorityIconMap';

const PriorityModal = ({
    showModal,
    changePriority,
    onClose,
  }: {
    showModal: boolean;
    changePriority: (p: number) => void;
    onClose: () => void;
  }) => {
    
    const priority = [
      [1, 'Low'],
      [2, 'Normal'],
      [3, 'High'],
      [4, 'Top'],
    ];
    
    const lastElem = priority[3][1];

    const onPress = (p:number) => {
      changePriority(p);
      onClose();
    }
  
    return (
          <View style={styles.contain}>
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
                            onPress={() => onPress(pair[0] as number)}
                          >
                            <Image
                                source={{ uri: PRIORITY_ICON_MAP[pair[0] as number] }}
                                style={{ width: 20, height: 20 }}
                            />
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
        // <View style={styles.contain}>
        //   <Modal
        //     _backdrop={{bg: "#2A00A5"}}
        //     isOpen={showModal}
        //     onClose={() => onClose()}
        //     safeAreaTop={true}
        //     style={styles.modal}
        //     size={'full'}
        //   >
        //       <Modal.Content style={styles.bottomModal} justifyContent={'center'}>
        //         <Modal.CloseButton
        //           variant="#2A00A5"
        //           tintColor="#2A00A5"
        //           color="#2A00A5"
        //           style={{}}
        //         />
        //         <Modal.Header
        //           style={styles.modalHeader}>
        //           <Text style={styles.modalHeaderText}>Priority</Text>
        //         </Modal.Header>
        //         <Modal.Footer style={styles.modalFooter}>
        //           <FormControl style={styles.form}>
        //             <View style={styles.circleRow}>
        //               {priority.map((pair : (number | string)[]) => {
        //                 return (
        //                  <View style={styles.makesRow}>
        //                   <Pressable 
        //                     style={styles.makesRowPressable} 
        //                     onPress={() => onPress(pair[0] as number)}
        //                   >
        //                       <Image
        //                           source={{ uri: PRIORITY_ICON_MAP[pair[0] as number] }}
        //                           style={{ width: 20, height: 20 }}
        //                       />
        //                       <Text style={styles.priorityText}> {pair[1]} </Text>
        //                   </Pressable>
        //                   {!(lastElem === pair[1]) && <View style={styles.lineSeparator}/>}
        //                   </View>
        //                   )
        //               })}
        //             </View>
        //           </FormControl>
        //         </Modal.Footer>
        //       </Modal.Content>
        //   </Modal>
        // </View>
      );
  };

  export default PriorityModal;
