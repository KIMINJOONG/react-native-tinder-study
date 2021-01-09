import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {IProps, IStyle} from './type';

const LinearGradientComponent = styled(LinearGradient)`
  ${(props: IStyle) => props.width !== undefined && `width: ${props.width}`};
  ${(props: IStyle) => props.height !== undefined && `height: ${props.height}`};
  ${(props: IStyle) => props.flex !== undefined && `flex: ${props.flex}`};
  ${(props: IStyle) => props.color !== undefined && `color: ${props.color}`};
  ${(props: IStyle) =>
    props.position !== undefined && `position: ${props.position}`};
  ${(props: IStyle) =>
    props.flexDirection !== undefined &&
    `flex-direction: ${props.flexDirection}`};
  ${(props: IStyle) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent}`};
  ${(props: IStyle) =>
    props.alignItems !== undefined && `align-items: ${props.alignItems}`};

  ${(props: IStyle) =>
    props.paddingBottom !== undefined &&
    `padding-bottom: ${props.paddingBottom}`};
  ${(props: IStyle) =>
    props.paddingHorizontal !== undefined &&
    `padding-horizontal: ${props.paddingHorizontal}`};
  ${(props: IStyle) =>
    props.borderRadius !== undefined && `border-radius: ${props.borderRadius}`};
  ${(props: IStyle) =>
    props.borderColor !== undefined && `border-color: ${props.borderColor}`};
  ${(props: IStyle) =>
    props.borderWidth !== undefined && `border-width: ${props.borderWidth}`};
  ${(props: IStyle) =>
    props.marginTop !== undefined && `margin-top: ${props.marginTop}`};
  ${(props: IStyle) => props.bottom !== undefined && `bottom: ${props.bottom}`};
  ${(props: IStyle) => props.right !== undefined && `right: ${props.right}`};
  ${(props: IStyle) => props.left !== undefined && `left: ${props.left}`};
`;

const LinearGradientAtom = ({
  children,
  colors,
  color,
  width,
  height,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  borderRadius,
  borderColor,
  marginTop,
  padding,
  paddingBottom,
  paddingHorizontal,
  position,
  bottom,
  left,
  right,
}: IProps) => {
  return (
    <LinearGradientComponent
      colors={colors}
      color={color}
      width={width}
      height={height}
      flex={flex}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingHorizontal={paddingHorizontal}
      borderRadius={borderRadius}
      borderColor={borderColor}
      marginTop={marginTop}
      position={position}
      bottom={bottom}
      left={left}
      right={right}>
      {children}
    </LinearGradientComponent>
  );
};

export default LinearGradientAtom;
