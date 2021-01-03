export interface IProps extends ITextInputStyleProps {
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  onChangeText?: any;
  secureTextEntry?: boolean;
  value: string;
}

export interface ITextInputStyleProps {
  platform?: string;
  flex?: number;
  paddingLeft?: string;
  color?: string;
  marginTopIOS?: string;
  marginTopAndroid?: string;
  height?: number | string;
}
