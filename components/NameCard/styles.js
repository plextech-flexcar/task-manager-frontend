import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor:'white',
    flex: 1,
  },
  taskHeading: {
    fontfamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
    marginTop: '1.8%',
    marginLeft: '3%'
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
