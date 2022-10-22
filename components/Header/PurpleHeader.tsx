import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Searchbar } from "react-native-paper";

import HeaderButtons from "./HeaderButton";
import { styles } from "./styles";

export default function PurpleHeader() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  return (
    <View style={styles.headerBack}>
      <View style={styles.headerSearchRow}>
        <Image
          source={{ uri: require("../../assets/HeaderIcons/user.svg") }}
          style={{ width: 16, height: 16 }}
        />
        <Searchbar
          placeholder="Search tasks"
          placeholderTextColor="#76757D"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            width: "60%",
            height: 30,
            backgroundColor: "#FFFFFF",
          }}
          inputStyle={{ fontSize: 15 }}
        />
        <Image
          source={{ uri: require("../../assets/HeaderIcons/addlist.svg") }}
          style={{ width: 16, height: 16 }}
        />
      </View>
      <View style={styles.headerButtonRow}>
        <HeaderButtons buttonName={"Reset "} />
        <Text style={{ color: "#76757D", paddingVertical: 4 }}>50 Tasks</Text>
        <HeaderButtons buttonName={"Sort & Filter"} />
      </View>
    </View>
  );
}
