import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    circleRow: {
        backgroundColor: "white",
        marginBottom: 15,
        marginHorizontal: 15,
    },
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 15,
    },
    filterText: {
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
        height: '85%',
        backgroundColor: '#EDEDED',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },

    modalHeader: {
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingHorizontal: 15,
        width: '63%',
    },
    modalHeaderTitle: {
        fontSize: 17,
    },
    backText: {
        fontfamily: 'Inter',
        color: '#2A00A5',
        fontWeight: '400',
        fontSize: 20,
    },
    boxRow: {
        backgroundColor: 'white',
        marginBottom: 15,
        marginHorizontal: 15,
    },
});
export { styles };
