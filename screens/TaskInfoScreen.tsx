import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TaskInfoHeader from "../components/TaskInfo/TaskInfoHeader";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Icon, VStack } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Divider, Paragraph } from "react-native-paper";
const TaskInfoScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#EDEDED" }}>
      <TaskInfoHeader />
      <View>
        <View
          style={{
            marginLeft: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 300,
            }}
          >
            <Text style={{ fontSize: 21 }}>
              Glass Chip Rear Window Passenger's side
            </Text>
          </View>

          <View style={{ marginRight: 20 }}>
            <Image source={require("../assets/vector.png")} />
            <Text style={{ color: "#E53935" }}>Top</Text>
          </View>
        </View>

        <Text style={{ marginLeft: 20 }}>3 Days old</Text>
        <View style={{ marginLeft: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>Status: Assigned to Elias Charalambides</Text>
            <View
              style={{
                marginLeft: 3,
                backgroundColor: "#2A00A5",
                padding: 5,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                EC
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ marginLeft: 20 }}>
          Created by: Adam Miller on 3/15/22 - 4:28pm
        </Text>
      </View>

      <View style={{ backgroundColor: "white", marginTop: 11 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              White Honda Civic 2020
            </Text>
            <Text>23HJ349, NC MVA: 91884092</Text>
            <Text>VIN: SHSRD78775Y233242</Text>
            <View
              style={{
                backgroundColor: "#FFB052",
                alignSelf: "flex-start",
                padding: 5,
              }}
            >
              <Text>Unavialble/Servicer</Text>
            </View>
          </View>
          <Image
            style={{ marginRight: 16 }}
            source={require("../assets/car.png")}
          />
        </View>
        <Divider style={{ width: "80%", marginLeft: 16 }} />
        <VStack style={{ marginLeft: 20 }}>
          <Text>Using a windshied repair kit: </Text>
          <Text>1. Remove the broken glass</Text>
          <Text>2. Clean the area</Text>
          <Text>3. Apply the adhesive</Text>
          <Text>4. Apply the glass</Text>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default TaskInfoScreen;
