import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { HStack } from 'native-base';

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
      style={isPurple ? styles1.buttonPurple : styles1.buttonWhite}
      onPress={() => funcSelect()()}
    >
      <HStack space={1} alignItems="center" justifyContent={'center'}>
        <Text style={isPurple ? styles1.buttonTextWhite : styles1.buttonTextPurple}>
          <Text style={{ textAlign: 'center', justifyContent: 'center' }}>{text}</Text>
        </Text>
        {imageSource && <Image style={{ width: 20, height: 20 }} source={imageSource} />}
      </HStack>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles1 = StyleSheet.create({
  buttonWhite: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderColor: '#2A00A5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextPurple: {
    color: '#2A00A5',
    fontWeight: '700',
  },
  buttonPurple: {
    textAlign: 'center',
    backgroundColor: '#2A00A5',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextWhite: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  contain: {
    marginTop: 20,
    marginBottom: 20,
  },
  modal: {
    width: '100%',
    borderBottomWidth: 0,
    textAlign: 'center',
  },
  bottomModal: {
    marginBottom: 0,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
});
