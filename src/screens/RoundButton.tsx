import React, {useCallback, useRef} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled, {css} from 'styled-components/native';

const Container: any = styled(Animated.View)`
  width: 70px;
  height: 70px;
  background-color: #fff;
  elevation: 5;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
`;

const RoundButton = ({name, size, color, onPress}: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animatedScale = useCallback(
    (newValue: any) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale],
  );
  return (
    <TouchableWithoutFeedback
      onPressIn={() => animatedScale(0.8)}
      onPressOut={() => {
        animatedScale(1);
        onPress();
      }}
      delayPressIn={0}
      delayPressOut={110}>
      <Container scale={scale} style={{transform: [{scale}]}}>
        <Icon name={name} size={size} color={color} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RoundButton;
