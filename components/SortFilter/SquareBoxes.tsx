import * as React from "react";
import { RadioButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import SquareCheckBox from "./SquareCheckbox";

export default function SquareBoxes(props: { filterCheck: string[] }) {
  let { filterCheck } = props;
  
  return (
    <View style={styles.circleRow}>
      {filterCheck.map((title) => {
        return <SquareCheckBox checkBoxLabel={title} key={title} />;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  circleRow: {
    backgroundColor: "white",
    marginBottom: 15,
    marginHorizontal: 15,
  },
});
