import React, { useState } from "react";
import { TouchableHighlight, Text, Image } from "react-native";

export default function HeaderButtons(props: { buttonName: string }) {
  let { buttonName } = props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <TouchableHighlight
        style={{
          paddingHorizontal: 12,
          paddingVertical: 4,
          width: "auto",
          backgroundColor: isActive ? "#27007A" : "",
          borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        onPress={handleClick}
      >
        <>
          <Text
            style={{
              color: isActive ? "white" : "#27007A",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {buttonName}
          </Text>
        </>
      </TouchableHighlight>
    </>
  );
}
