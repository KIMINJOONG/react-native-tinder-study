import React, {useCallback, useEffect, useRef, useState} from 'react';
// import View from '../components/atoms/View';
import {useDispatch, useSelector} from 'react-redux';
import {loadUsersAction, removeUserCardAction} from '../actions/user/action';
import {RootState} from '../reducers';
import Card from './Card';
import styled from 'styled-components/native';
import Footer from './Footer';
import {Animated, PanResponder, PanResponderGestureState} from 'react-native';
import {ACTION_OFFSET, CARD} from '../utils/constants';

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
`;

const Choice = () => {
  const dispatch = useDispatch();
  const {loadUsersDone, loadUsersError, users} = useSelector(
    (state: RootState) => state.user,
  );
  useEffect(() => {
    dispatch(loadUsersAction());
  }, []);

  const swipe = useRef(new Animated.ValueXY()).current;
  const titleSign = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy});
      titleSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, {dx, dy}: PanResponderGestureState) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    dispatch(removeUserCardAction());
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoice = useCallback(
    (direction: any) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x],
  );

  return (
    <Container>
      {users &&
        users.users.map((user: any, index: number) => {
          // const isFirst = index === 0;
          const isFirst = true;
          const dragHandler = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={user.id}
              user={user}
              isFirst={isFirst}
              {...dragHandler}
              swipe={swipe}
              titleSign={titleSign}
            />
          );
        })}
      <Footer handleChoice={handleChoice} />
    </Container>
  );
};

export default Choice;
