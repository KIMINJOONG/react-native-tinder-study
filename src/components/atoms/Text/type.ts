import React from 'react';
import {GestureResponderEvent} from 'react-native';

export interface IProps extends IStyle {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface IStyle {
  textAlign?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
  position?:string;
  bottom?:string;
  left?:string;
}
