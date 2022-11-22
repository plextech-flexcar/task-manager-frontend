import React from "react";
import { Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconButton } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./createTaskHeaderStyles";
const CreateTaskHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <View style={styles.backButton}>
        <IconButton
          icon={<AntDesign name="left" size={15} color="#2A00A5" />}
          marginTop="3"
          onPress={() => navigation.goBack()}
          _pressed={{ bg: null }}
        />
        <Pressable onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: "#2A00A5",
              fontSize: 15,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            All Tasks
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          marginLeft: "15%",
          display: "flex",
          justifyContent: "center",
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Create Task</Text>
      </View>
    </View>
  );
};
export default CreateTaskHeader;
