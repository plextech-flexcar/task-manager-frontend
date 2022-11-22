import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    height: 'hug',
    rounded: 'lg',
    top: 16,
    bottom: 16,
    borderRadius: 9,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    elevation: 4,
    marginVertical: 8,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  taskHeadingBlack: {
    fontfamily: 'Inter',
    fontSize: 17,
    lineHeight: 24,
    flexWrap: 1,
    fontWeight: '700',
    color: '#080726',
  },
  taskHeadingGray: {
    fontfamily: 'Inter',
    fontSize: 17,
    lineHeight: 24,
    flexWrap: 1,
    fontWeight: '700',
    color: '#9A9A9E',
  },
  taskDateText: {
    fontfamily: 'Inter',
    fontSize: 13,
    color: '#76757d',
    fontWeight: '400',
  },
  vehicleBlackText: {
    fontfamily: 'Inter',
    fontSize: 15,
    color: '#080726',
    fontWeight: '400',
  },
  vehicleGrayText: {
    fontfamily: 'Inter',
    fontSize: 15,
    color: '#9A9A9E',
    fontWeight: '400',
  },

});

export { styles };
