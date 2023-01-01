import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    vstack: {
        marginBottom: 15,
        marginTop: 15,
        display: "flex",
        justifyContent: "space-around"
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: "#CECED0",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#EDEDED", 
        height: "10%", 
        width: "100%"
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "80%"
    }
});

export { styles };