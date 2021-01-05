import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import {IProps, IStyle} from './type';

const AnimatableViewComponent = styled(Animatable.View)`
  ${(props: IStyle) => props.width !== undefined && `width: ${props.width}`};
  ${(props: IStyle) => props.height !== undefined && `height: ${props.height}`};
  ${(props: IStyle) => props.flex !== undefined && `flex: ${props.flex}`};
  ${(props: IStyle) =>
    props.backgroundColor !== undefined &&
    `background-color: ${props.backgroundColor}`};
  ${(props: IStyle) => props.color !== undefined && `color: ${props.color}`};
  ${(props: IStyle) =>
    props.flexDirection !== undefined &&
    `flex-direction: ${props.flexDirection}`};
  ${(props: IStyle) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent}`};
  ${(props: IStyle) =>
    props.alignItems !== undefined && `align-items: ${props.alignItems}`};
  ${(props: IStyle) =>
    props.padding !== undefined && `padding: ${props.padding}`};
  ${(props: IStyle) =>
    props.paddingBottom !== undefined &&
    `padding-bottom: ${props.paddingBottom}`};
  ${(props: IStyle) =>
    props.paddingHorizontal !== undefined &&
    `padding-horizontal: ${props.paddingHorizontal}`};
  ${(props: IStyle) =>
    props.paddingVertical !== undefined &&
    `padding-vertical: ${props.paddingVertical}`};
  ${(props: IStyle) =>
    props.borderRadius !== undefined && `border-radius: ${props.borderRadius}`};
  ${(props: IStyle) =>
    props.borderTopLeftRadius !== undefined &&
    `border-top-left-radius: ${props.borderTopLeftRadius}`};
  ${(props: IStyle) =>
    props.borderTopRightRadius !== undefined &&
    `border-top-right-radius: ${props.borderTopRightRadius}`};
  ${(props: IStyle) =>
    props.borderColor !== undefined && `border-color: ${props.borderColor}`};
  ${(props: IStyle) =>
    props.borderWidth !== undefined && `border-width: ${props.borderWidth}`};
  ${(props: IStyle) =>
    props.marginTop !== undefined && `margin-top: ${props.marginTop}`};
`;
const AnimatableViewAtom = ({
  children,
  animation,
  width,
  height,
  flex,
  backgroundColor,
  justifyContent,
  alignItems,
  borderRadius,
  borderColor,
  borderWidth,
  borderTopLeftRadius,
  borderTopRightRadius,
  marginTop,
  color,
  flexDirection,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,
}: IProps) => {
  return (
    <AnimatableViewComponent
      animation={animation}
      width={width}
      height={height}
      flex={flex}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      marginTop={marginTop}
      color={color}
      flexDirection={flexDirection}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}>
      {children}
    </AnimatableViewComponent>
  );
};

export default AnimatableViewAtom;
