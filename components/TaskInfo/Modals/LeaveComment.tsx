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
import { styles } from '../../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { styles1 } from './leaveCommentStyles';
const LeaveComment = ({ showModal, onClose }) => {
  const [comment, setComment] = useState('');
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
        <KeyboardAvoidingView
          style={styles.whitebg}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                Leave comment
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
                  <View style={{ flex: 8 }}>
                    <TextInput
                      placeholder="Reason"
                      autoFocus={false}
                      style={styles1.input}
                      onChangeText={(text) => setComment(text)}
                      onSubmitEditing={() => onClose()}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Pressable onPress={() => onClose()}>
                      <Image
                        source={require('../../../assets/submit.webp')}
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
};

export default LeaveComment;
