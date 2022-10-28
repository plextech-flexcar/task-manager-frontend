import { Square } from "native-base";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function SquareCheckBox(props: { checkBoxLabel: string }) {
  let { checkBoxLabel } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox.Item
      label={checkBoxLabel}
      key={checkBoxLabel}
      position={"leading"}
      status={checked ? "checked" : "unchecked"}
      labelStyle={{ textAlign: "left" }}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
}
