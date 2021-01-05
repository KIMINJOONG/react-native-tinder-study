import React from 'react';
import styled from 'styled-components/native';
import {IProps, ITextInputStyleProps} from './type';

const Input = styled.TextInput`
  ${(props: ITextInputStyleProps) =>
    props.flex !== undefined && `flex: ${props.flex}`};
  margin-top: ${(props: ITextInputStyleProps) =>
    props.platform === 'ios' ? props.marginTopIOS : props.marginTopAndroid};
  ${(props: ITextInputStyleProps) =>
    props.color !== undefined && `color: ${props.color}`};
  ${(props: ITextInputStyleProps) =>
    props.paddingLeft !== undefined && `padding-left: ${props.paddingLeft}`};
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
