import React, { useState } from "react";
import { TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles.js";
import { atomModalVisible } from "../../atoms";
import { useAtom } from "jotai";

export default function HeaderButtons(props: { buttonName: string }) {
  const { buttonName } = props;
  const [isActive, setIsActive] = useState(false);

  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);

  const handleClick = () => {
    setIsActive(!isActive);
    if (buttonName == "Sort & Filter") {
      setModalVisible(true);
      setIsActive(false);
    }
  };

  return (
    <>
      <TouchableHighlight
        style={isActive ? styles.active : styles.notActive}
        onPress={handleClick}
      >
        <>
          <Text style={isActive ? styles.activeButton : styles.notActiveButton}>
            {buttonName}
          </Text>
        </>
      </TouchableHighlight>
    </>
  );
}
