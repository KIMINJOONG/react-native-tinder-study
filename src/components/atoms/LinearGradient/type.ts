import React from 'react';

export interface IProps extends IStyle {
  children: React.ReactNode;
  colors: Array<string>;
}

export interface IStyle {
  flex?: number;
  color?: string;
  flexDirection?: string;
  padding?: string;
}
