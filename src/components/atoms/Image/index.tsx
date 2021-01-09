import React from 'react';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const Img = styled.Image`
  ${(props: IStyle) => props.width !== undefined && `width: ${props.width}`};
  ${(props: IStyle) => props.height !== undefined && `height: ${props.height}`};
  ${(props: IStyle) =>
    props.borderRadius !== undefined && `border-radius: ${props.borderRadius}`};
`;

const Image = ({userProfile, width, height, borderRadius}: IProps) => {
  return (
    <Img
      source={{uri: userProfile}}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default Image;
