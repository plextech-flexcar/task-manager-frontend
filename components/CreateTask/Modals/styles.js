import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  whitebg: {
    backgroundColor: '#EDEDED',
  },
  keyboardView: {
    backgroundColor: '#EDEDED',
    flex: 1,
  },
  input: {
    borderColor: '#2A00A5',
    padding: 10,
  },
  form: {
    placeholderTextColor: "#2A00A5",
    // placeholderTextColor: '#76757D',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    onselect: 'none',
    boxShadow: 'none',
    backgroundColor: '#fff',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderColor: '#2A00A5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonText: {
    color: '#2A00A5',
    fontWeight: '700',
  },
  buttonPurple: {
    textAlign: 'center',
    backgroundColor: '#2A00A5',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextWhite: {
    color: '#FFF',
    fontWeight: '700',
  },
  contain: {
    marginTop: 20,
    marginBottom: 20,
  },
  modal: {
    width: '100%',
    borderBottomWidth: 0,
    textAlign: 'center',
  },
  modalHeader: {
    borderBottomWidth: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  modalHeaderText: {
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
  },
  bottomModal: {
    // marginBottom: 20,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
  modalFooter: {
    borderTopWidth: 0, 
    elevation: 0, 
    margin: 0,
  },
  lineSeparator: {
    borderBottomColor: "#CECED0",
    borderBottomWidth: 1,
    display: "flex",
    width: "100%",
    alignSelf: "flex-end",
    marginTop: 8,
  },
  circleRow: {
    borderRadius: 7.5,
    backgroundColor: "white",
    marginVertical: 16,
    marginHorizontal: 16,
  },
  priorityText: {
    paddingLeft: 14,
    fontSize: 16,
  },
  makesRow: {
    display: "flex", 
    flexDirection: "column", 
    // alignItems: "center",
    // marginHorizontal: 16,
    marginVertical: 8,
  },
  makesRowPressable: {
    display: "flex", 
    flexDirection:"row", 
    width: "90%", 
    // justifyContent: "space-between",
  },
});
