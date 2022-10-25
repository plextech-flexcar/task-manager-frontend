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
import { Icon } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
const TaskInfoScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <TaskInfoHeader />
        <View style={{ marginLeft: 20, backgroundColor: "#EDEDED" }}>
          <View
            style={{
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

          <Text>3 Days old</Text>
          <View>
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
          <Text>Created by: Adam Miller on 3/15/22 - 4:28pm</Text>
        </View>

        <View
          style={{ backgroundColor: "white", marginTop: 10, marginLeft: 20 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>White Honda Civic 2020</Text>
              <Text>23HJ349, NC MVA: 91884092</Text>
              <Text>VIN: SHSRD78775Y233242</Text>
              <Text>Unavialble/Service</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TaskInfoScreen;
