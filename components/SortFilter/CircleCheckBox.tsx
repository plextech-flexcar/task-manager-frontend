import * as React from "react";
import { RadioButton } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyComponent = () => {
  const [value, setValue] = React.useState("first");

  return (
    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
      <RadioButton.Item
        label="First item"
        value="first"
        position={"leading"}
        labelStyle={{ textAlign: "left" }}
        style={styles.circleRow}
      />
      <RadioButton.Item
        label="Second item"
        value="second"
        position={"leading"}
        labelStyle={{ textAlign: "left" }}
        style={styles.circleRow}
      />
    </RadioButton.Group>
  );
};
const styles = StyleSheet.create({
  circleRow: {
    justifyContent: "flex-start",
    marginHorizontal: 15,
    backgroundColor: "white",
  },
});
export default MyComponent;
