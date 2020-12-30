import React from 'react';
import {View} from 'react-native';
import RoundButton from './RoundButton';
import {COLORS} from '../utils/constants';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 15;
  width: 170;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
`;
const Footer = ({handleChoice}: any) => {
  return (
    <Container>
      <RoundButton
        name={'times'}
        size={40}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        name={'heart'}
        size={40}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </Container>
  );
};

export default Footer;
