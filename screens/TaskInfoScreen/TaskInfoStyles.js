import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  whitebg: {
    backgroundColor: "#EDEDED",
  },
  headermt: {
    marginTop: 16,
  },
  viewMarginLeft: {
    marginLeft: 20,
  },
  headerHorizontalStack: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 21,
    fontWeight: "800",
  },
  mrView: {
    marginRight: 20,
  },
  headerContainer: {
    width: "90%",
  },
  priorityTop: {
    color: "#E53935",
  },
  textDate: {
    marginLeft: 20,
    color: "#76757D",
    marginTop: 3,
  },
  assignBox: {
    marginLeft: 3,
    backgroundColor: "#2A00A5",
    padding: 5,
    borderRadius: 8,
  },
  assignBoxText: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
  },
  textTop: {
    marginTop: 3,
  },
  middleBox: {
    backgroundColor: "white",
    marginTop: 11,
  },
  middleHorizontalStack: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  textCarType: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 3,
  },
  unavailableBox: {
    backgroundColor: "#FFB052",
    alignSelf: "flex-start",
    padding: 5,
    marginTop: 3,
  },
  imageMarginRight: {
    marginRight: 16,
  },
  vehicleDivider: {
    width: "90%",
    marginLeft: 16,
    marginTop: 3,
  },
  vehicleVerticalStack: {
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 15,
  },
  vehicleMarginTop: {
    marginTop: 10,
  },
  commentVStack: {
    marginLeft: 20,
    height: "100%",
  },
  commentBox: {
    marginTop: 3,
    marginRight: 20,
  },
  commentBy: {
    color: "#76757D",
  },
});

export { styles };
