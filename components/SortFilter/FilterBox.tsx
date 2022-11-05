import { Square } from "native-base";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function FilterBox(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  let { changeFilter } = props;
  const data = ["market", "task type", "make & model", "status", "priority"];

  return (
    <View style={styles.circleRow}>
      {data.map((title) => {
        return (
          <TouchableOpacity
            key={title}
            onPress={() => changeFilter(title)}
            style={styles.filterRow}
          >
            <Text style={styles.filterText}>{title}</Text>
            <Image
              source={require("../../assets/next.png")}
              style={{ height: 15, width: 15 }}
            ></Image>
          </TouchableOpacity>
        );
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
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 15,
  },
  filterText: {
    fontSize: 16,
  },
});
