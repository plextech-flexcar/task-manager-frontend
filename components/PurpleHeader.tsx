import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderButtons from "./HeaderButton";

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
        <HeaderButtons buttonName={"Quick View "} buttonImage={"whitebolt"} />
        <HeaderButtons buttonName={"Sort "} buttonImage={"sort"} />
        <HeaderButtons buttonName={"Filter "} buttonImage={"filter"} />
        <HeaderButtons buttonName={"Clear "} buttonImage={""} />
      </View>
    </>
  );
}
