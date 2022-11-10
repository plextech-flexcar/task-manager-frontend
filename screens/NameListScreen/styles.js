import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#EDEDED",
    height: "430px",
    width: "414px",
    borderRadius: "5px",
    position: "absolute",
    left: "500px",
    top: "100px"
    
  },
  icon: {
    position: "absolute",
    top: "4.25px",
    right: "4.25px"
  },

  text: {
    fontStyle: "Inter", 
    fontSize: 15, 
    fontWeight: "bold", 
    position: "relative",
    top: "16px",
    marginBottom: "32px"


  },
});

export { styles };
