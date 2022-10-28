import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import CircleCheckBox from "./CircleCheckBox";
import SquareCheckBox from "./SquareCheckbox";

export default function BottomPopup() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        hasBackdrop
        hideModalContentWhileAnimating
        animationOut={"slideOutDown"}
        backdropOpacity={0.2}
        backdropColor={"#27007A"}
        isVisible={isModalVisible}
        style={styles.view}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleModal}>
              <Image
                source={require("../../assets/closeModal.png")}
                style={{ height: 20, width: 20 }}
              ></Image>
              <Text></Text>
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>Sort and Filter</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Image
                source={require("../../assets/closeModal.png")}
                style={{ height: 20, width: 20 }}
              ></Image>
              <Text></Text>
            </TouchableOpacity>
          </View>

          <CircleCheckBox />

          <SquareCheckBox />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalView: {
    height: "85%",
    backgroundColor: "#EDEDED",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  modalHeader: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  modalHeaderTitle: {
    fontWeight: "700",
    fontSize: 15,
  },
});
