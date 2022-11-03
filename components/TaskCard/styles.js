import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 'hug',
    rounded: 'lg',
    top: '16px',
    bottom: '16px',
    borderColor: 'violet.400',
    borderWidth: '1',
    borderRadius: '9px',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
    marginVertical: 8,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  taskHeading: {
    fontfamily: 'Inter',
    fontSize: '17px',
    fontWeight: '700',
    color: '#080726',
  },
  taskDateText: {
    fontfamily: 'Inter',
    fontSize: '13px',
    color: '#76757d',
    fontWeight: '400',
  },
  vehicleText: {
    fontfamily: 'Inter',
    fontSize: '15px',
    color: '#080726',
    fontWeight: '400',
  },
});

export { styles };
