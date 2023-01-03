import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContent: {
        display: 'flex', 
        justifyContent: 'space-between', 
        height: '90%'
    },
    filterVector: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
    },
    sortFilterView: { 
        height: '85%',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    lineSeparator: {
        borderBottomColor: "#CECED0",
        borderBottomWidth: 1,
        display: "flex",
        width: "95%",
        alignSelf: "flex-end",
    },
    circleRow: {
        borderRadius: 7.5,
        backgroundColor: "white",
        marginVertical: 16,
        marginHorizontal: 16,
    },
    makesRow: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        marginHorizontal: 16,
        marginVertical: 8,
    },
    makesRowPressable : {
        display: "flex", 
        flexDirection:"row", 
        width: "90%", 
        justifyContent: "space-between",
    },
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 15,
    },
    filterText: {
        paddingLeft: 14,
        fontSize: 16,
    },
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalView: {
        height: '80%',
        backgroundColor: '#EDEDED',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        display: 'flex',
    },
    modalHeader: {
        paddingTop: 20,
        paddingBottom: 10, 
        paddingHorizontal: 15,
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '97.5%',
        alignContent: 'center'
    },
    modalHeaderTitle: {
        fontSize: 17,
        fontWeight: '700',
    },
    backText: {
        fontfamily: 'Inter',
        color: '#2A00A5',
        fontWeight: '400',
        fontSize: 15,
    },
    resetText: {
        fontfamily: 'Inter',
        color: '#2A00A5',
        fontWeight: '400',
        fontSize: 15,
    }
});
export { styles };
