import React from "react";
import { Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconButton } from "native-base";
import { useNavigation } from "@react-navigation/native";
const TaskInfoHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          alignSelf: "flex-end",
          flexDirection: "row",
        }}
      >
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
        <Text style={{ fontWeight: "bold" }}>Task Info</Text>
      </View>
    </View>
    // <HStack
    //   px="1"
    //   py="3"
    //   justifyContent="space-between"
    //   alignItems="center"
    //   w="100%"
    //   maxW="100%"
    //   bg="red.500"
    //   display={{ base: "flex", md: "none" }}
    // >
    //   <HStack>
    //     <IconButton
    //       icon={<AntDesign name="left" size={15} color="#2A00A5" />}
    //     />
    //     <Text color="#2A00A5" fontSize="15" fontWeight="bold">
    //       All Tasks
    //     </Text>
    //   </HStack>
    //   <Text fontSize="15" fontWeight="bold">
    //     Task Info
    //   </Text>
    // </HStack>
  );
};
export default TaskInfoHeader;
