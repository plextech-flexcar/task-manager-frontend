import { ScrollView } from "native-base";
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
import FilterBox from "./FilterBox";
import SquareBoxes from "./SquareBoxes";

export default function SortFilter() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("Sort & Filter");
  let modalIcon = "closeModal";

  const toggleModal = () => {
    setTitle("Sort & Filter");
    setModalVisible(!isModalVisible);
  };

  const changeFilter = (filterName: string) => {
    modalIcon = "next";
    console.log(modalIcon);
    setTitle(filterName);
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
                source={require(`../../assets/${modalIcon}.png`)}
                style={{ height: 20, width: 20 }}
              ></Image>
              <Text></Text>
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
          </View>
          <ScrollView>
            {title == "Sort & Filter" && (
              <>
                <CircleCheckBox />
                <SquareBoxes />
                <FilterBox changeFilter={changeFilter} />
              </>
            )}
            {title == "Filter by Market" && <SquareBoxes />}
          </ScrollView>
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
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "baseline",
    paddingHorizontal: 15,
    width: "100%",
  },
  modalHeaderTitle: {
    //uhhhh We have a problem I cant center this div for the life of me someone else fix this please
    left: "300%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
});
