import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    placeholderText: {
        fontfamily: 'Inter',
        fontSize: 17,
        lineHeight: 22,
        flexWrap: 1,
        fontWeight: '400',
        color: '#76757D',
    },
    dropdownSection: {
        height: "9%",
        width: "90%",
        alignSelf: "center",
        margin: 15,
        display: "flex",
        justifyContent: "center",
    },
    vehicleDropdownSection: {
        minHeight: "10%",
        maxHeight: "25%",
        width: "90%",
        alignSelf: "center",
        margin: 10,
        display: "flex",
        justifyContent: "center",
        paddingVertical: 10
    },
    dropdown : {
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderColor: "#DCDCDE",
        borderRadius: 8,
        borderWidth: 1.5,
        display: "flex",
        padding: 12,
        justifyContent: "space-between"
    },
    titleText: {
        fontfamily: 'Inter',
        fontSize: 15,
        lineHeight: 22,
        flexWrap: 1,
        fontWeight: '400',
        color: '#080726',
    },
    valueText: {
        fontfamily: 'Inter',
        fontSize: 17,
        lineHeight: 22,
        flexWrap: 1,
        fontWeight: '400',
    },
});

export { styles };
