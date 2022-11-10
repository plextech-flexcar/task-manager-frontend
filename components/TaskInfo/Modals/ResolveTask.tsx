import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { HStack, Modal, Button } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { styles1 } from './resolveTaskStyles';
const ResolveTask = ({ resolveShowModal, onCloseCall, onResolve }) => {
  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles1.contain}>
        <Modal
          isOpen={resolveShowModal}
          onClose={() => onCloseCall()}
          safeAreaTop={true}
          style={styles1.modal}
          size={'full'}
          presentationStyle="fullScreen"
        >
          <Modal.Content style={styles1.bottomModal} justifyContent={'center'}>
            <Modal.Header style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontWeight: '600',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                Resolve Task
              </Text>
            </Modal.Header>
            <Modal.Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ textAlign: 'center' }}>
                Are you sure all the work has been completed to resolve this task?
              </Text>
            </Modal.Body>
            <Modal.Footer style={{ borderTopWidth: 0, elevation: 0, margin: 0 }}>
              <Button.Group space={2} style={styles1.buttonGroup}>
                <TouchableOpacity onPress={() => onCloseCall()} style={styles1.button}>
                  <Text style={styles1.buttonText}>
                    <Text style={{ textAlign: 'center', justifyContent: 'center' }}>
                      CANCEL
                    </Text>
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onResolve()}
                  style={styles1.buttonPurple}
                >
                  <HStack space={1} alignItems="center" justifyContent={'center'}>
                    <Text style={styles1.buttonTextWhite}>RESOLVE</Text>
                  </HStack>
                </TouchableOpacity>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ResolveTask;
