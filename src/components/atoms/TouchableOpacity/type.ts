import React from 'react';
import {GestureResponderEvent} from 'react-native';

export interface IProps extends IStyle {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface IStyle {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number | string;
  marginTop?: number | string;
}
