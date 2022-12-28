import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  icon: {
    left: '44%',
    top: '4.7%'

  },
  text: {
    fontfamily: 'Inter',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
  },
  modal: {
      width: '50%',
      borderBottomWidth: 0,
      textAlign: 'center',
    },
    searchBar: {
      width: '97%',
      height: 40,
      backgroundColor: '#FFFFFF',
      left: 1,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#2A00A5',
      bottom: 16,
      top: 20,
      marginBottom: '5%',
      marginTop: '5%'
    },

});

export { styles };
