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
      justifyContent={justifyContent}
      height={height}
      width={width}>
      {children}
    </ViewContainer>
  );
};

export default View;
