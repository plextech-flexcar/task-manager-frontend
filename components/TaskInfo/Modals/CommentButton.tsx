import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { HStack } from "native-base";
import { styles } from "../../../screens/TaskInfoScreen/TaskInfoStyles.js";

const onPress = () => {};
const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');


  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles1.contain}>
        <HStack space={3} alignItems="center" justifyContent={"center"}>
            <TouchableOpacity onPress={onPress} style={styles1.button}>
                    <Text style={styles1.buttonText}>COMMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)} style={styles1.buttonPurple}>
                <HStack space={1} alignItems="center" justifyContent={"center"}>
                    <Text style={styles1.buttonTextWhite}>ASSIGN</Text>

                    <Image style={{width: 20, height: 20}} source={require("../../assets/person_search.png")} />
                </HStack>
            </TouchableOpacity>
            </HStack>
      </View>
    </SafeAreaView>
  );
};

export default TaskInfoPopup;

const styles1 = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: "#FFF",
    borderColor: "#2A00A5",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: "40%",
    
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
    width: "40%",
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
    marginBottom: 0,
    marginTop: "auto",
    borderBottomWidth: 0,
  },
});
