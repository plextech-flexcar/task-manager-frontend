import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { HStack } from "native-base";
import { styles } from "../../../screens/TaskInfoScreen/TaskInfoStyles.js";

const onPress = () => {};
const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <SafeAreaView style={styles.whitebg}>
    <View style={styles1.contain}>
             <TouchableOpacity onPress={onPress} style={styles1.button}>
              <Text style={styles1.buttonText}><Text style={{textAlign: "center", justifyContent:"center"}}>COMMENT</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)} style={styles1.buttonPurple}>
              <HStack space={1} alignItems="center" justifyContent={"center"}>
                    <Text style={styles1.buttonTextWhite}>ASSIGN</Text>

                    <Image style={{width: 20, height: 20}} source={require("../../../assets/person_search.png")} />
              </HStack>
            </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

export default TaskInfoPopup;

const styles1 = StyleSheet.create({
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
    marginBottom: 0,
    marginTop: "auto",
    borderBottomWidth: 0,
  },
});
