import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    height: 'hug',
    rounded: 'lg',
    top: '16px',
    bottom: '16px',
    borderRadius: '9px',
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    elevation: 4,
    marginVertical: 8,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  taskHeading: {
    fontfamily: 'Inter',
    fontSize: '17px',
    lineHeight: '24px',
    flexWrap:1,
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
