import React from 'react';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const TextStyled = styled.Text`
  ${(props: IStyle) => props.color !== undefined && `color: ${props.color}`};
  ${(props: IStyle) =>
    props.textAlign !== undefined && `text-align: ${props.textAlign}`};
  ${(props: IStyle) =>
    props.fontSize !== undefined && `font-size: ${props.fontSize}`};
  ${(props: IStyle) =>
    props.fontWeight !== undefined && `font-weight: ${props.fontWeight}`};
  ${(props: IStyle) =>
    props.marginTop !== undefined && `margin-top: ${props.marginTop}`};
  ${(props: IStyle) =>
    props.position !== undefined && `position: ${props.position}`};
  ${(props: IStyle) => props.bottom !== undefined && `bottom: ${props.bottom}`};
  ${(props: IStyle) => props.left !== undefined && `left: ${props.left}`};
`;

const Text = ({
  children,
  textAlign,
  color,
  fontSize,
  fontWeight,
  marginTop,
  position,
  bottom,
  left,
  onPress,
}: IProps) => {
  return (
    <TextStyled
      onPress={onPress}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginTop={marginTop}
      position={position}
      bottom={bottom}
      left={left}>
      {children}
    </TextStyled>
  );
};

export default Text;
