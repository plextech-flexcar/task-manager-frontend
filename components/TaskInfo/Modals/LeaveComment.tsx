import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Modal, FormControl } from "native-base";
import { styles } from "../../../screens/TaskInfoScreen/TaskInfoStyles.js";

const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles1.contain}>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        safeAreaTop={true}
        style={styles1.modal}
        size={"full"}
      >
        <KeyboardAvoidingView
          style={styles.whitebg}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Modal.Content style={styles1.bottomModal} justifyContent={"center"}>
            <Modal.CloseButton
              variant="#2A00A5"
              tintColor="#2A00A5"
              color="#2A00A5"
              style={{}}
            />
            <Modal.Header
              style={{
                borderBottomWidth: 0,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Leave comment
              </Text>
            </Modal.Header>
            <Modal.Footer
              style={{ borderTopWidth: 0, elevation: 0, margin: 0 }}
            >
              <FormControl style={styles1.form}>
                <View
                  style={{
                    flexDirection: "row",
                    margin: 5,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ flex: 8 }}>
                    <TextInput
                      placeholder="Reason"
                      autoFocus={true}
                      style={styles1.input}
                      onSubmitEditing={() => setShowModal(false)}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Pressable onPress={() => setShowModal(false)}>
                      <Image
                        source={require("../../../assets/submit.png")}
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

export default TaskInfoPopup;

const styles1 = StyleSheet.create({
  keyboardView: {
    backgroundColor: "#EDEDED",
    flex: 1,
  },
  input: {
    borderColor: "#2A00A5",
    padding: 10,
  },
  form: {
    placeholderTextColor: "#76757D",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2A00A5",
    onselect: "none",
    boxShadow: "none",
    backgroundColor: "#fff",
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    textAlign: "center",
    backgroundColor: "#FFF",
    borderColor: "#2A00A5",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: "100%",
    flex: 1,
  },
  buttonText: {
    color: "#2A00A5",
    fontWeight: "700",
  },
  buttonPurple: {
    textAlign: "center",
    backgroundColor: "#2A00A5",
    padding: 10,
    borderRadius: 30,
    width: "100%",
    flex: 1,
  },
  buttonTextWhite: {
    color: "#FFF",
    fontWeight: "700",
  },
  contain: {
    marginTop: 20,
    marginBottom: 20,
  },
  modal: {
    width: "100%",
    borderBottomWidth: 0,
    textAlign: "center",
  },
  bottomModal: {
    marginBottom: 20,
    marginTop: "auto",
    borderBottomWidth: 0,
  },
});
