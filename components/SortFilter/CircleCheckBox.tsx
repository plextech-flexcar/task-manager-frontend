import * as React from "react";
import { RadioButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { View } from "native-base";

export default function CircleCheckBox() {
  const [value, setValue] = React.useState("first");
  const data = [
    "Priority: Top to low",
    "Priority: Low to top",
    "Oldest to newest",
    "Newest to oldest",
    "Alphabetical",
  ];

  return (
    <View style={styles.circleRow}>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        {data.map((title) => {
          return (
            <RadioButton.Item
              label={title}
              value={title}
              key={title}
              position={"leading"}
              labelStyle={{ textAlign: "left" }}
              color={"#2A00A5"}
            />
          );
        })}
      </RadioButton.Group>
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
