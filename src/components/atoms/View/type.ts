import React from 'react';

export interface IProps extends IStyle {
  children: React.ReactNode;
}

export interface IStyle {
  flex?: number;
  flexDirection?: string;
  backgroundColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  marginTop?: string;
  marginBottom?:string;
  borderBottomWidth?: string;
  borderBottomColor?: string;
  paddingBottom?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  height?: string;
  width?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
}
