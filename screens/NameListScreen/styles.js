import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    height: '100%',
    width: '100%',
    borderRadius: '5px',
  },
  icon: {
    position: 'absolute',
    top: '4.25px',
    right: '4.25px',
  },

  text: {
    fontStyle: 'Inter',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    top: '16px',
    marginBottom: '32px',
  },
});

export { styles };
