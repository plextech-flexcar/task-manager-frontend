import React, { useState } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { styles } from './styles.js';

export default function HeaderButtons(props: { buttonName: string }) {
  const { buttonName } = props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>  
      <TouchableHighlight
        style={isActive ? styles.active : styles.notActive}
        onPress={handleClick}
      >
        <>
          <Text style={isActive ? styles.activeButton : styles.notActiveButton}>
            {buttonName}
          </Text>
        </>
      </TouchableHighlight>
    </>
  );
}
