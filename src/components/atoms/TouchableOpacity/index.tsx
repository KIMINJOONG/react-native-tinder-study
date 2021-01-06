import React from 'react';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const TouchableOpacityComponent = styled.TouchableOpacity`
  ${(props: IStyle) => props.width !== undefined && `width: ${props.width}`};
  ${(props: IStyle) => props.height !== undefined && `height: ${props.height}`};
  ${(props: IStyle) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent}`};
  ${(props: IStyle) =>
    props.alignItems !== undefined && `align-items: ${props.alignItems}`};
  ${(props: IStyle) =>
    props.borderRadius !== undefined && `border-radius: ${props.borderRadius}`};
  ${(props: IStyle) =>
    props.borderColor !== undefined && `border-color: ${props.borderColor}`};
  ${(props: IStyle) =>
    props.borderWidth !== undefined && `border-width: ${props.borderWidth}`};
  ${(props: IStyle) =>
    props.marginTop !== undefined && `margin-top: ${props.marginTop}`};
`;

const TouchableOpacityAtom = ({
  children,
  onPress,
  width,
  height,
  justifyContent,
  alignItems,
  borderRadius,
  borderColor,
  borderWidth,
  marginTop,
}: IProps) => {
  return (
    <TouchableOpacityComponent
      onPress={onPress}
      width={width}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      marginTop={marginTop}>
      {children}
    </TouchableOpacityComponent>
  );
};

export default TouchableOpacityAtom;
