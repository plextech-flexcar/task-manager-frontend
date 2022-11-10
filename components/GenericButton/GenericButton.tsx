import React from 'react';
import { Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { HStack } from 'native-base';
import { styles } from './styles';
const GenericButton = ({
  isPurple,
  imageSource,
  text,
  functionCall,
  cancelResolve,
  commentCall,
}: {
  isPurple: boolean;
  imageSource?: ImageSourcePropType;
  text: string;
  functionCall?: any;
  cancelResolve?: any;
  commentCall?: any;
}) => {
  const funcSelect = () => {
    if (functionCall) {
      return functionCall;
    } else if (cancelResolve) {
      return cancelResolve;
    } else if (commentCall) {
      return commentCall;
    }
  };
  return (
    <TouchableOpacity
      style={isPurple ? styles.buttonPurple : styles.buttonWhite}
      onPress={() => funcSelect()()}
    >
      <HStack space={1} alignItems="center" justifyContent={'center'}>
        <Text style={isPurple ? styles.buttonTextWhite : styles.buttonTextPurple}>
          <Text style={{ textAlign: 'center', justifyContent: 'center' }}>{text}</Text>
        </Text>
        {imageSource && <Image style={{ width: 20, height: 20 }} source={imageSource} />}
      </HStack>
    </TouchableOpacity>
  );
};

export default GenericButton;
