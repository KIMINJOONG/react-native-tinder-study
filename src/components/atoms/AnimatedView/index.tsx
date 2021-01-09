import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {IProps, IStyle} from './type';

const AnimatedViewComponent = styled(Animated.View)`
  ${(props: IStyle) =>
    props.position !== undefined && `position: ${props.position}`};
  ${(props: IStyle) => props.top !== undefined && `top: ${props.top}`};
`;

const AnimatedViewAtom = ({
  children,
  position,
  top,
  isFirst,
  animatedCardStyle,
  ...rest
}: IProps) => {
  return (
    <AnimatedViewComponent
      {...rest}
      position={position}
      top={top}
      style={isFirst && animatedCardStyle}>
      {children}
    </AnimatedViewComponent>
  );
};

export default AnimatedViewAtom;
