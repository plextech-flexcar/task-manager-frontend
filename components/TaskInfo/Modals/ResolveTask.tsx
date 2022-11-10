import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { HStack, Modal, Button } from 'native-base';
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles.js';

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

const styles1 = StyleSheet.create({
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
