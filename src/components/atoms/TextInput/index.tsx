import React from 'react';
import styled from 'styled-components/native';
import {IProps, ITextInputStyleProps} from './type';

const Input = styled.TextInput`
  flex: ${(props: ITextInputStyleProps) =>
    props.flex === undefined ? 1 : props.flex};
  margin-top: ${(props: ITextInputStyleProps) =>
    props.platform === 'ios' ? props.marginTopIOS : props.marginTopAndroid};
  color: ${(props: ITextInputStyleProps) =>
    props.color === undefined ? '#fff' : props.color};
  padding-left: ${(props: ITextInputStyleProps) =>
    props.paddingLeft === undefined ? '0px' : props.paddingLeft};
`;

const TextInput = ({
  placeholder,
  platform,
  autoCapitalize,
  onChangeText,
  flex,
  marginTopIOS,
  marginTopAndroid,
  paddingLeft,
  color,
  secureTextEntry,
  value,
  height,
}: IProps) => {
  return (
    <Input
      flex={flex}
      paddingLeft={paddingLeft}
      color={color}
      placeholder={placeholder}
      platform={platform}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      marginTopIOS={marginTopIOS}
      marginTopAndroid={marginTopAndroid}
      secureTextEntry={secureTextEntry}
      value={value}
      height={height}
    />
  );
};

export default TextInput;
