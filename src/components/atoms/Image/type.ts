export interface IProps extends IStyle {
  userProfile: string;
}

export interface IStyle {
  width?: any;
  height?: any;
  position?:string;
  top?:string;
  flex?: number;
  backgroundColor?: string;
  justifyContent?: string;
  alignItems?: string;
  borderRadius?: any;
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
