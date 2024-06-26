import React, { useState } from 'react';
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
import { styles } from './styles.js';

const DescriptionModal = (({
    showModal,
    changeDescription,
    onClose,
  }: {
    showModal: boolean;
    changeDescription: (comment:string) => void;
    onClose: () => void;
  }) => {
  const [comment, setComment] = useState('');
  const onSubmit = () => {
    changeDescription(comment);
    onClose();
  }
  const submitButton = require('../../../assets/images/navigation/submit.webp');
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
        <KeyboardAvoidingView
          style={styles.whitebg2}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Modal.Content style={styles.bottomModal} justifyContent={'center'}>
            <Modal.CloseButton
              variant="#2A00A5"
              tintColor="#2A00A5"
              color="#2A00A5"
              style={{}}
            />
            <Modal.Header style={[styles.modalHeader, {borderBottomWidth: 0, marginLeft: 0}]}>
              <Text style={styles.modalHeaderTitle}>Task description</Text>
            </Modal.Header>
            <Modal.Footer style={styles.modalFooter}>
              <FormControl style={[styles.form, {borderColor:'#2A00A5'}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 5,
                    padding: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View style={{ flex: 8 }}>
                    <TextInput
                      placeholder="Define task description"
                      autoFocus={false}
                      style={styles.input}
                      onChangeText={(text) => setComment(text)}
                      onSubmitEditing={() => onClose()}
                    />
                  </View>

                  <View>
                    <Pressable onPress={() => onSubmit()}>
                      <Image
                        source={submitButton}
                        style={{ width: 20, height: 20 }}
                      />
                    </Pressable>
                  </View>
                </View>
              </FormControl>
            </Modal.Footer>
          </Modal.Content>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
});

export default DescriptionModal;

