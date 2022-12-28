import React from 'react';
import { Box } from 'native-base';

const IconComponent = (props: { first: string; last: string }) => {
  const { first, last } = props;
  const fillColor = first === "" && last === "" ? "#FFFFFF" : "#2A00A5";
  return (
    <Box
      rounded="md"
      alignSelf="center"
      _text={{
        fontSize: 'sm',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 'lg',
      }}
      borderColor = "#2A00A5"
      borderWidth = "2"
      bg={[fillColor]}
      width="27px"
      height="27px"
      marginRight="30px"
    >
      {props.first.charAt(0) + props.last.charAt(0)}
    </Box>
  );
};
export default IconComponent;
