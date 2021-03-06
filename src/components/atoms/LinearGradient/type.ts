import React from 'react';

export interface IProps extends IStyle {
  children?: React.ReactNode;
  colors: Array<string>;
}

export interface IStyle {
  width?: string;
  height?: string;
  flex?: number;
  justifyContent?: string;
  alignItems?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  marginTop?: string;
  color?: string;
  flexDirection?: string;
  padding?: number | string;
  paddingBottom?: string;
  paddingHorizontal?: string;
  position?:string;
  bottom?:string | number;
  left?:string;
  right?:string;
}
