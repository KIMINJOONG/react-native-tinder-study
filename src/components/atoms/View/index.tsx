import React from 'react';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const ViewContainer = styled.View`
  flex: ${(props: IStyle) => (props.flex === undefined ? 1 : props.flex)};
  flex-direction: ${(props: IStyle) =>
    props.flexDirection === undefined ? 'column' : props.flexDirection};
  background-color: ${(props: IStyle) =>
    props.backgroundColor === undefined ? '#fff' : props.backgroundColor};
  margin-top: ${(props: IStyle) =>
    props.marginTop === undefined ? '0px' : props.marginTop};
  border-bottom-width: ${(props: IStyle) =>
    props.borderBottomWidth === undefined ? '1px' : props.borderBottomWidth};
  border-bottom-color: ${(props: IStyle) =>
    props.borderBottomColor === undefined ? '#fff' : props.borderBottomColor};
  padding-bottom: ${(props: IStyle) =>
    props.paddingBottom === undefined ? '0px' : props.paddingBottom};
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
      alignItems={alignItems}>
      {children}
    </ViewContainer>
  );
};

export default View;
