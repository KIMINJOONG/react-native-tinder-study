import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../utils/constants';

const Container: any = styled.View`
  border-width: 7;
  padding-horizontal: 15;
  border-radius: 15;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: ${(props: any) => props.borderColor};
`;

const Type: any = styled.Text`
  font-size: 48;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4;
  color: ${(props: any) => props.color};
`;
const LikeOrNot = ({type}: any) => {
  const color = COLORS[type];
  return (
    <Container borderColor={color}>
      <Type color={color}>{type}</Type>
    </Container>
  );
};

export default LikeOrNot;
