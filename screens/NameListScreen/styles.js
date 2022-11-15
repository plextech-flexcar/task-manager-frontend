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
    position: 'absolute',
    top: 4,
    right: 4,
  },

  text: {
    fontStyle: 'Inter',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    top: 16,
    marginBottom: 32,
  },
});

export { styles };
