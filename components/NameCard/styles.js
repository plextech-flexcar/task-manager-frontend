import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '382px',
    height: 'hug',
    top: '1px',
    left: '1px',
    borderColor: 'violet.400',
    borderWidth: '1',
    borderRadius: '9px',
    marginVertical: 0,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
  },
  taskHeading: {
    fontfamily: 'Inter',
    fontSize: '17px',
    fontWeight: '400',
    color: 'black',
  },
  textSpacing: {
    marginLeft: 10
  },
  taskDateText: {
    fontfamily: 'Inter',
    fontSize: '13px',
    color: '#76757d',
    fontWeight: '400',
  },
});

export { styles };
