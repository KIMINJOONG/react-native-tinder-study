import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {IProps, IStyle} from './type';

const LinearGradientComponent = styled(LinearGradient)`
  ${(props: IStyle) => props.flex !== undefined && `flex: ${props.flex}`};
  ${(props: IStyle) => props.color !== undefined && `color: ${props.color}`};
  ${(props: IStyle) =>
    props.flexDirection !== undefined &&
    `flex-direction: ${props.flexDirection}`};
  ${(props: IStyle) =>
    props.padding !== undefined && `padding: ${props.padding}`};
`;

const LinearGradientAtom = ({
  children,
  colors,
  color,
  flex,
  flexDirection,
  padding,
}: IProps) => {
  return (
    <LinearGradientComponent
      colors={colors}
      color={color}
      flex={1}
      flexDirection={flexDirection}
      padding={padding}>
      {children}
    </LinearGradientComponent>
  );
};

export default LinearGradientAtom;
