import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  vehicleList: {
    width: '100%', 
    height:'100%', 
    display: 'flex', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 8},
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  lineSeparator: {
    borderBottomColor: "#CECED0",
    borderBottomWidth: 1,
    display: "flex",
    width: "100%",
    alignSelf: "flex-end",
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
  textTop: {
    marginTop: 0,
  },
  middleBox: {
    backgroundColor: 'white',
    marginTop: 11,
  },
  middleHorizontalStack: {
    paddingHorizontal: 7.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  textCarType: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 3,
  },
  unavailableBox: {
    backgroundColor: '#FFB052',
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 3,
  },
  availableBox: {
    backgroundColor: "#39BD09",
    alignSelf: "flex-start",
    padding: 5,
    marginTop: 3,
  },
  image: {
    height: '80%',
    width: '40%'
  },
  vehicleDivider: {
    width: '90%',
    marginLeft: 16,
    marginTop: 3,
  },
  vehicleVerticalStack: {
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 15,
  },
  vehicleMarginTop: {
    marginTop: 10,
  },
  

});

export { styles };
