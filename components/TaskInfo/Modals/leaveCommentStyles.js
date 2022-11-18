import { StyleSheet } from 'react-native';
export const styles1 = StyleSheet.create({
  keyboardView: {
    backgroundColor: '#EDEDED',
    width: '100%',
  },
  input: {
    borderColor: '#2A00A5',
    padding: 10,
    outlineStyle: 'none',
  },
  form: {
    placeholderTextColor: '#76757D',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2A00A5',
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
    // marginTop: 20,
    // marginBottom: 20,
    width: '100%',
  },
  modal: {
    width: '100%',
    borderBottomWidth: 0,
    textAlign: 'center',
    margin: 0,
  },
  bottomModal: {
    marginBottom: 20,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
});
