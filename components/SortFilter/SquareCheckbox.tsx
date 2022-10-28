import { Square } from "native-base";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function SquareCheckBox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox.Item
      label={"Priority: Low"}
      position={"leading"}
      style={styles.checkRow}
      status={checked ? "checked" : "unchecked"}
      labelStyle={{ textAlign: "left" }}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
}
const styles = StyleSheet.create({
  checkRow: {
    justifyContent: "flex-start",
    margin: 0,
    backgroundColor: "white",
    marginHorizontal: 15,
  },
});
