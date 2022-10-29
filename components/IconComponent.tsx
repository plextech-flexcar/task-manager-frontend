import React from 'react';
import { View, Text } from 'react-native';
import { Box } from "native-base";

const IconComponent = (props: {
    first: string,
    last: string
}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "2A00A5"}}>
        <Box>
          <Text>
              name
          </Text>
        </Box>
    </View>
  );
}
export default IconComponent