import React, { useState } from "react";
import { TouchableHighlight, Text, Image } from "react-native";
import SvgUri from "react-native-svg-uri";

export default function HeaderButtons(props: {
  buttonName: string;
  buttonImage: string;
}) {
  let { buttonName, buttonImage } = props;
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
          height: 32,
          backgroundColor: isActive ? "#27007A" : "",
          borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "baseline",
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
          {buttonImage && (
            <Image
              source={{
                uri: require(`../assets/HeaderIcons/${buttonImage}.svg`),
              }}
              style={{ width: 8, height: 10 }}
            />
          )}
        </>
      </TouchableHighlight>
    </>
  );
}
