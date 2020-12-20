import { GestureResponderEvent } from "react-native";

export interface IProps {
  title: string;
  backgroundColor: string;
  onPress: (event: GestureResponderEvent) => void;
  icon: string;
}
