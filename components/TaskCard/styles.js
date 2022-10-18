import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: "382px" ,
        height: "hug",
        rounded: "lg", 
        top:"16px",
        bottom:"16px",
        borderColor: "violet.400",  
        borderWidth: "1",
        borderRadius: "9px",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .3,
        shadowRadius: 3,
        elevation: 1
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
        color: "#080726",
        fontWeight:"400" 
    }
});

export {styles};