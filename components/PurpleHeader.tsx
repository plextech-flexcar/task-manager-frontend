import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function PurpleHeader() {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 56,
          backgroundColor: "#27007A",
        }}
      ></View>
      <View
        style={{
          width: "100%",
          height: 56,
          backgroundColor: "#F5F2FB",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: require("../assets/HeaderIcons/user.svg") }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Task List</Text>
        <Image
          source={{ uri: require("../assets/HeaderIcons/addlist.svg") }}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#F5F2FB",
          borderTopColor: "#d1cdd8",
          borderTopWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "#d1cdd8",
          borderBottomWidth: StyleSheet.hairlineWidth,

          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          style={{
            paddingHorizontal: 12,
            paddingVertical: 4,
            width: "auto",
            height: 32,
            backgroundColor: "#27007A",
            borderRadius: 18,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "baseline",
          }}
          onPress={() => console.log("hi")}
        >
          <>
            <Text
              style={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              Quick view: 1
            </Text>
            <Image
              source={{ uri: require("../assets/HeaderIcons/whitebolt.svg") }}
              style={{ width: 8, height: 12 }}
            />
          </>
        </TouchableHighlight>
      </View>
    </>
  );
}
