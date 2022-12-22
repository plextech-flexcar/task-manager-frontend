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
  isDisabled,
}: {
  isPurple: boolean;
  imageSource?: ImageSourcePropType;
  text: string;
  functionCall?: any;
  cancelResolve?: any;
  commentCall?: any;
  isDisabled?: boolean;
}) => {
  const funcSelect = () => {
    //Ask Taiga about the cancelResolve and the commentCall parameter
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
      style={isDisabled ? styles.buttonDisabled : (isPurple ? styles.buttonPurple : styles.buttonWhite)}
      onPress={() => funcSelect()()}
      disabled = {isDisabled}
    >
      <HStack space={1} alignItems="center" justifyContent={'center'}>
        <Text style={isDisabled ? styles.buttonTextWhite : (isPurple ? styles.buttonTextWhite : styles.buttonTextPurple)}>
          {text}
        </Text>
        {imageSource && <Image style={{ width: 20, height: 20 }} source={imageSource} />}
      </HStack>
    </TouchableOpacity>
  );
};

export default GenericButton;
