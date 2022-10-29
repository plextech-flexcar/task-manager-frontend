import React from 'react';
import { Box} from "native-base";

const IconComponent = (props: {
    first: string,
    last: string
}) => {
  return (
    <Box rounded="md" alignSelf="center" 
    _text={{
      fontSize: "md",
      textAlign: "center",
      borderColor:"black",
      fontWeight: "extrabold",
      color: "white",
      letterSpacing: "lg"
    }} bg={["blue.600"]} width="27px" height="27px" >
        { props.first.charAt(0) + props.last.charAt(0) }
      </Box>
  );
}
export default IconComponent