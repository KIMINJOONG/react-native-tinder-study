import React, {useCallback} from 'react';
import {Animated, View} from 'react-native';
import styled from 'styled-components/native';
import {ACTION_OFFSET, CARD} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import LikeOrNot from '../LikeOrNot';
import AnimatedViewAtom from '../../components/atoms/AnimatedView';
import Image from '../../components/atoms/Image';
import Text from '../../components/atoms/Text';
import LinearGradientAtom from '../../components/atoms/LinearGradient';

const LikeContainer = styled(Animated.View)`
  position: absolute;
  top: 100px;
  left: 45px;
  transform: rotate(-30deg);
`;

const NopeContainer = styled(Animated.View)`
  position: absolute;
  top: 100px;
  right: 45px;
  transform: rotate(30deg);
`;

const Card = ({user, isFirst, swipe, titleSign, ...rest}: any) => {
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
    <AnimatedViewAtom
      top={'45px'}
      position={'absolute'}
      isFirst={isFirst}
      animatedCardStyle={animatedCardStyle}
      {...rest}>
      <Image
        userProfile={user.profile[0].src}
        width={`${CARD.WIDTH}px`}
        height={`${CARD.HEIGHT}px`}
        borderRadius={`${CARD.BORDER_RADIUS}px`}
      />
      <LinearGradientAtom
        position={'absolute'}
        bottom={'0'}
        left={'0'}
        right={'0'}
        height={'160px'}
        borderRadius={`${CARD.BORDER_RADIUS}px`}
        colors={['transparent', 'rgba(0,0,0,0.9)']}
      />
      <Text
        position={'absolute'}
        bottom={'22px'}
        left={'22px'}
        fontSize={'36px'}
        fontWeight={'bold'}
        color={'#fff'}>
        {user.nickname}
      </Text>

      {isFirst && renderChoice()}
    </AnimatedViewAtom>
  );
};

export default Card;
