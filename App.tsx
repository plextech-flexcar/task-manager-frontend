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
import PurpleHeader from "./components/PurpleHeader";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PurpleHeader />
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={styleSheet.MainContainer}>
          <Text style={styleSheet.title}>
            {" "}
            Example of Vertical ScrollView in React Native{" "}
          </Text>

          <Text style={styleSheet.text}>
            {" "}
            Example of Vertical ScrollView in React Native{" "}
          </Text>

          <Text style={styleSheet.text}>
            {" "}
            Example of Vertical ScrollView in React Native{" "}
          </Text>

          <View style={{ width: 200, height: 200, backgroundColor: "green" }} />

          <Image
            source={{
              uri:
                "https://reactnative-examples.com/wp-content/uploads/2021/10/white-lily.jpg",
            }}
            style={{
              width: 300,
              height: 230,
              resizeMode: "contain",
              margin: 10,
            }}
          />

          <View style={{ width: 200, height: 200, backgroundColor: "pink" }} />

          <Image
            source={{
              uri:
                "https://reactnative-examples.com/wp-content/uploads/2021/10/white-lily.jpg",
            }}
            style={{
              width: 300,
              height: 230,
              resizeMode: "contain",
              margin: 10,
            }}
          />

          <View style={{ width: 200, height: 200, backgroundColor: "blue" }} />

          <Image
            source={{
              uri:
                "https://reactnative-examples.com/wp-content/uploads/2021/10/white-lily.jpg",
            }}
            style={{
              width: 300,
              height: 230,
              resizeMode: "contain",
              margin: 10,
            }}
          />

          <Text style={styleSheet.text}> ScrollView Last Element </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    color: "black",
    padding: 5,
    fontWeight: "bold",
  },

  text: {
    fontSize: 22,
    textAlign: "center",
    color: "black",
    padding: 5,
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 46,
    backgroundColor: "teal",
  },

  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
  },
});
