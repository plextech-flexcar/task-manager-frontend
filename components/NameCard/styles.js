import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 382,
    height: 50,
    top: 1,
    left: 1,
    borderColor: 'violet.400',
    borderWidth: '1',
    borderRadius: 9,
    marginVertical: 0,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
  },
  taskHeading: {
    fontfamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  textSpacing: {
    marginLeft: 20,
  },
  taskDateText: {
    fontfamily: 'Inter',
    fontSize: 13,
    color: '#76757d',
    fontWeight: '400',
  },
});

export { styles };
