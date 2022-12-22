import { ImageSourcePropType } from "react-native";

export const PRIORITY_ICON_MAP: { [key: number]: ImageSourcePropType } = {
  1: require('../../assets/priorities/lowPriority.webp'),
  2: require('../../assets/priorities/normalPriority.webp'),
  3: require('../../assets/priorities/highPriority.webp'),
  4: require('../../assets/priorities/topPriority.webp'),
};
