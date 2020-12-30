import React, {useCallback} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {ACTION_OFFSET, CARD} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import LikeOrNot from '../LikeOrNot';

const Container = styled(Animated.View)`
  position: absolute;
  top: 45;
`;

const Img = styled.Image`
  width: ${CARD.WIDTH};
  height: ${CARD.HEIGHT};
  border-radius: ${CARD.BORDER_RADIUS};
`;

const Name = styled.Text`
  position: absolute;
  bottom: 22;
  left: 22;
  font-size: 36;
  font-weight: bold;
  color: #fff;
`;

const Gradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160;
  border-radius: ${CARD.BORDER_RADIUS};
`;

const LikeContainer = styled(Animated.View)`
  position: absolute;
  top: 100;
  left: 45;
  transform: rotate(-30deg);
`;

const NopeContainer = styled(Animated.View)`
  position: absolute;
  top: 100;
  right: 45;
  transform: rotate(30deg);
`;

const Card = ({user, isFirst, swipe, titleSign,...rest }: any) => {
  const rotate: any = Animated.multiply(swipe.x, titleSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <LikeContainer style={{opacity: likeOpacity}}>
          <LikeOrNot type={'like'} />
        </LikeContainer>
        <NopeContainer style={{opacity: nopeOpacity}}>
          <LikeOrNot type={'nope'} />
        </NopeContainer>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Container {...rest} style={isFirst && animatedCardStyle}>
      <Img source={{uri: user.profile[0].src}} />
      <Gradient colors={['transparent', 'rgba(0,0,0,0.9)']} />
      <Name>{user.nickname}</Name>

      {isFirst && renderChoice()}
    </Container>
  );
};

export default Card;
