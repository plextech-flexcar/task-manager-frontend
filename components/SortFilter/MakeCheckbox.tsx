import React from 'react';
import { Checkbox, HStack } from "native-base";
import { TouchableOpacity, Text, Image } from 'react-native';

export default MakeCheckbox = (title) => {
    return (
        <HStack>
            <Checkbox
              label={title}
              key={title}
              position={'leading'}
              status={checkType}
              onPress={checkboxChangeState}
              color={'#2A00A5'}
            />
            <TouchableOpacity
              key={title}
              onPress={() => changeFilter(title)}
              style={styles.filterRow}
            >
              <Text style={styles.filterText}>{title}</Text>
              <Image
                source={require('../../assets/next.png')}
                style={{ height: 15, width: 15 }}
              ></Image>
            </TouchableOpacity>
          </HStack>
    )
}