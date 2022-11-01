import React from 'react';
import { Box} from "native-base";
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';

const IconComponent = (props: {
    first: string,
    last: string
}) => {
  return (
    <Box rounded="md" alignSelf="center" 
    _text={{
      fontSize: "sm",
      textAlign:"center",
      height: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      borderColor:"black",
      fontWeight: "bold",
      color: "white",
      letterSpacing: "lg"
    }} bg={["#2A00A5"]} width="27px" height="27px" >
        { props.first.charAt(0) + props.last.charAt(0) }
      </Box>
  );
}
export default IconComponent