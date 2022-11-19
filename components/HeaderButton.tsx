import React, { useState } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HeaderButtons(props: { buttonName: string }) {
  const { buttonName } = props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <TouchableHighlight style={isActive ? styles.headerButtonPurple : styles.headerButtonNone} onPress={handleClick}>
      <Text style={isActive ? styles.headerTextWhite : styles.headerTextPurple}>
        {buttonName}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  headerButtonPurple: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: 'auto',
    backgroundColor: '#27007A',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerButtonNone: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: 'auto',
    backgroundColor: '',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTextPurple: {
    color: '#27007A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerTextWhite: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
