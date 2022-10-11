import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: "366px" , //change width to fill later
        height: "Hug",
        rounded: "lg", 
        borderColor: "violet.400",  
        borderWidth: "1",
        borderRadius: "9px"
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
    }
});

export {styles};