import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonWhite: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderColor: '#2A00A5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextPurple: {
    color: '#2A00A5',
    fontWeight: '700',
    fontSize: 17,
  },
  buttonPurple: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#2A00A5',
    backgroundColor: '#2A00A5',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextWhite: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },
  buttonDisabled: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#BABABE',
    backgroundColor: '#BABABE',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
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
  bottomModal: {
    marginBottom: 0,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
});
