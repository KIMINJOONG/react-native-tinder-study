import React from 'react';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const ViewContainer = styled.View`
  ${(props: IStyle) => props.flex !== undefined && `flex: ${props.flex}`};
  ${(props: IStyle) =>
    props.flexDirection !== undefined &&
    `flex-direction: ${props.flexDirection}`};
  ${(props: IStyle) =>
    props.backgroundColor !== undefined &&
    `background-color: ${props.backgroundColor}`};
  ${(props: IStyle) =>
    props.marginTop !== undefined && `margin-top: ${props.marginTop}`};
  ${(props: IStyle) =>
    props.marginBottom !== undefined && `margin-bottom: ${props.marginBottom}`};
  ${(props: IStyle) =>
    props.borderBottomWidth !== undefined &&
    `border-bottom-width: ${props.borderBottomWidth}`};
  ${(props: IStyle) =>
    props.borderBottomColor !== undefined &&
    `border-bottom-color: ${props.borderBottomColor}`};
  ${(props: IStyle) =>
    props.paddingBottom !== undefined &&
    `padding-bottom: ${props.paddingBottom}`};
  ${(props: IStyle) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent}`};
  ${(props: IStyle) =>
    props.alignItems !== undefined && `align-items: ${props.alignItems}`};
  ${(props: IStyle) =>
    props.alignContent !== undefined && `align-content: ${props.alignContent}`};
  ${(props: IStyle) =>
    props.borderWidth !== undefined && `border-width: ${props.borderWidth}`};
  ${(props: IStyle) =>
    props.borderRadius !== undefined && `border-radius: ${props.borderRadius}`};
  ${(props: IStyle) =>
    props.borderColor !== undefined && `border-color: ${props.borderColor}`};
  ${(props: IStyle) =>
    props.paddingHorizontal !== undefined &&
    `padding-horizontal: ${props.paddingHorizontal}`};
`;

const View = ({
  children,
  flex,
  flexDirection,
  backgroundColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  paddingHorizontal,
  paddingVertical,
  marginTop,
  borderBottomWidth,
  borderBottomColor,
  paddingBottom,
  alignItems,
  justifyContent,
  height,
  width,
  alignContent,
  marginBottom,
  borderRadius,
  borderWidth,
  borderColor,
}: IProps) => {
  return (
    <ViewContainer
      flex={flex}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      marginTop={marginTop}
      borderBottomWidth={borderBottomWidth}
      borderBottomColor={borderBottomColor}
      paddingBottom={paddingBottom}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyContent={justifyContent}
      height={height}
      width={width}
      marginBottom={marginBottom}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}>
      {children}
    </ViewContainer>
  );
};

export default View;
