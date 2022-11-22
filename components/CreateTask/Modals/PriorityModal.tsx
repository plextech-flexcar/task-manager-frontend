import * as React from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Pressable,
  } from 'react-native';
import { Modal, FormControl } from 'native-base';
import { styles1 } from './PriorityModalStyles';
import { PRIORITY_ICON_MAP } from '../../TaskCard/TaskCardPriorityIconMap';

const PriorityModal = ({
    showModal,
    onClose,
  }: {
    showModal: boolean;
    onClose: () => void;
  }) => {
    return (
        <View style={styles1.contain}>
          <Modal
            _backdrop={{bg: "#2A00A5"}}
            isOpen={showModal}
            onClose={() => onClose()}
            safeAreaTop={true}
            style={styles1.modal}
            size={'full'}
          >
              <Modal.Content style={styles1.bottomModal} justifyContent={'center'}>
                <Modal.CloseButton
                  variant="#2A00A5"
                  tintColor="#2A00A5"
                  color="#2A00A5"
                  style={{}}
                />
                <Modal.Header
                  style={{
                    borderBottomWidth: 0,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontWeight: '600',
                      textAlign: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Priority
                  </Text>
                </Modal.Header>
                <Modal.Footer style={{ borderTopWidth: 0, elevation: 0, margin: 0 }}>
                  <FormControl style={styles1.form}>
                    <View
                      style={{
                        flexDirection: 'row',
                        margin: 5,
                        padding: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
    
                      <View style={{ flex: 1 }}>
                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{ uri: PRIORITY_ICON_MAP[1] }}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text> Low <Text/>
                        </Pressable>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{ uri: PRIORITY_ICON_MAP[2] }}
                                style={{ width: 20, height: 20 }}
                            />
                        </Pressable>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{ uri: PRIORITY_ICON_MAP[3] }}
                                style={{ width: 20, height: 20 }}
                            />
                        </Pressable>
                      </View>

                      <View style={{ flex: 1 }}>
                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{ uri: PRIORITY_ICON_MAP[4] }}
                                style={{ width: 20, height: 20 }}
                            />
                        </Pressable>
                      </View>

                    </View>
                  </FormControl>
                </Modal.Footer>
              </Modal.Content>
          </Modal>
        </View>
      );
  };