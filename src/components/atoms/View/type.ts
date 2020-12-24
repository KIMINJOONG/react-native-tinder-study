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
  borderBottomWidth?: string;
  borderBottomColor?: string;
  paddingBottom?: string;
  alignItems?: string;
  justifyContent?: string;
  height?:number;
}
