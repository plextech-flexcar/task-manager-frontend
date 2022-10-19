import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderButtons from "./HeaderButton";
import { Searchbar } from "react-native-paper";
export default function PurpleHeader() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  return (
    <View
      style={{
        height: 148,
        width: "100%",
        backgroundColor: "#EDEDED",
        borderBottomColor: "#d1cdd8",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#EDEDED",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "5px",
        }}
      >
        <Image
          source={{ uri: require("../assets/HeaderIcons/user.svg") }}
          style={{ width: 16, height: 16 }}
        />
        <Searchbar
          placeholder="Search Tasks"
          placeholderTextColor="#76757D"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            width: 200,
            height: 30,
            backgroundColor: "#FFFFFF",
          }}
          inputStyle={{ fontSize: 15 }}
        />
        <Image
          source={{ uri: require("../assets/HeaderIcons/addlist.svg") }}
          style={{ width: 16, height: 16 }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: "5px",
        }}
      >
        <HeaderButtons buttonName={"Reset "} />
        <Text style={{ color: "#76757D", paddingVertical: 4 }}>50 Tasks</Text>
        <HeaderButtons buttonName={"Sort & Filter"} />
      </View>
    </View>
  );
}
