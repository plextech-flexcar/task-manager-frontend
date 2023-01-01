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
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <IconButton
          icon={<AntDesign name="left" size={15} color="#2A00A5" />}
          onPress={() => navigation.goBack()}
          _pressed={{ bg: null }}
        />
          <Text style={styles.backText}> All Tasks </Text>
      </Pressable>

      <View style={styles.createTaskHeader}>
        <Text style={{ fontWeight: "bold" }}>Create Task</Text>
      </View>
    </View>
  );
};
export default CreateTaskHeader;
