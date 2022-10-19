import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: "300px" ,
        height: "Hug",
        rounded: "lg", 
        borderColor: "violet.400",  
        borderWidth: "1",
        borderRadius: "9px",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .3,
        shadowRadius: 3,
        elevation: 1,
        marginVertical: 8
    },
    taskHeading: {
        fontfamily: "Inter",
        fontSize: "17px",
        fontWeight: "700",
        color: "#080726"
    },
    taskDateText: {
        fontfamily: "Inter",
        fontSize:"13px",
        color: "#76757d",
        fontWeight:"400" 
    },
    vehicleText: {
        fontfamily: "Inter",
        fontSize:"15px",
        color: "#080726"
    },
    userBox: {

        margin: "-15px",
        width: "50px" , //change width to fill later
        height: "50px",
        rounded: "lg", 
        borderColor: "violet.400",  
        borderWidth: "1",
        borderRadius: "9px",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .3,
        shadowRadius: 3,
        elevation: 1,
        flex: 1,
        backgroundColor: "#EDEDED"

    },
});

export {styles};