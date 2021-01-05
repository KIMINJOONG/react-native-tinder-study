import React from 'react';

export interface IProps extends IStyle {
  children: React.ReactNode;
  animation: string;
}

export interface IStyle {
  width?: string;
  height?: string;
  flex?: number;
  backgroundColor?: string;
  justifyContent?: string;
  alignItems?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number | string;
  marginTop?: string;
  color?: string;
  flexDirection?: string;
  padding?: string;
  paddingBottom?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}
