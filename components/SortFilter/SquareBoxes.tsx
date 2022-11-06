import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import SquareCheckBox from "./SquareCheckbox";

export default function SquareBoxes(props: { filterCheck: string[] }) {
  const { filterCheck } = props;
  
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
