import { ScrollView, HStack } from "native-base";
import React, { useState } from "react";
import {
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
    setModalIcon("backChevronModal")
  };

  const x = () => {
    if (title === "Sort & Filter") {
      toggleModal();
    } else {
      setModalIcon("closeModal")
      setTitle("Sort & Filter")
    }
  }

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
            <TouchableOpacity onPress={ x }>
              <HStack>
                <Image
                  source={require(`../../assets/${modalIcon}.png`)}
                  style={{ height: 20, width: 20 }}
                ></Image>
                {title !== "Sort & Filter" && (
                    <Text style={styles.backText}> Back </Text>
                )}
              </HStack>
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
          </View>
          <ScrollView>
            {title === "Sort & Filter" && (
              <>
                <CircleCheckBox />
                <FilterBox changeFilter={changeFilter} />
              </>
            )}
            {title === "Market" && <SquareBoxes filterCheck={filter[title]} />}
            {title === "Task Type" && (
              <SquareBoxes filterCheck={filter[title]} />
            )}
            {title === "Status" && <SquareBoxes filterCheck={filter[title]} />}
            {title === "Priority" && <SquareBoxes filterCheck={filter[title]} />}
            {title === "Quick View" && (
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
  backText: {
    fontfamily: 'Inter',
    color: '#2A00A5',
    fontWeight: '400',
    fontSize: 20
  }
});
