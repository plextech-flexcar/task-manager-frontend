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
import { atomFilterOptions, atomModalVisible } from "../../atoms";
import { useAtom } from "jotai";

export default function SortFilter() {
  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);
  const [title, setTitle] = useState("Sort & Filter");
  const [filter, setFilter] = useAtom(atomFilterOptions);

  const [modalIcon, setModalIcon] = useState("closeModal");

  const toggleModal = () => {
    setTitle("Sort & Filter");
    setModalVisible(!isModalVisible);
  };

  const changeFilter = (filterName: string) => {
    setTitle(filterName);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
                <FilterBox changeFilter={changeFilter} />
              </>
            )}
            {title == "market" && <SquareBoxes filterCheck={filter[title]} />}
            {title == "task type" && (
              <SquareBoxes filterCheck={filter[title]} />
            )}
            {title == "status" && <SquareBoxes filterCheck={filter[title]} />}
            {title == "priority" && <SquareBoxes filterCheck={filter[title]} />}
            {title == "quick view" && (
              <SquareBoxes filterCheck={filter[title]} />
            )}
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
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
    paddingHorizontal: 15,
    width: "55%",
  },
  modalHeaderTitle: {
    fontSize: 17,
  },
});
