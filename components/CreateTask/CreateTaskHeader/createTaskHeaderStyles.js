import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    backButton: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 1000
    },
    backText: {
        color: "#2A00A5",
        fontSize: 15,
        fontWeight: "bold",
    },
    createTaskHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        marginVertical: 10,
    },
});

export { styles };