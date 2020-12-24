import React, {useEffect, useState} from 'react';
// import View from '../components/atoms/View';
import {
  View,
  Dimensions,
  Image,
  Text,
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadUsersAction} from '../actions/user/action';
import {RootState} from '../reducers';

const Choice = () => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(new Animated.ValueXY());
  const dispatch = useDispatch();
  const {loadUsersDone, loadUsersError, users} = useSelector(
    (state: RootState) => state.user,
  );
  useEffect(() => {
    dispatch(loadUsersAction());
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{height: 20}}></View>
      <View style={{flex: 1}}>
        {users &&
          users.users &&
          users.users.map((user: any) => (
            <Animated.View
              key={user.id}
              style={[
                {transform: position.getTranslateTransform()},
                {
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                },
              ]}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: 'cover',
                  borderRadius: 20,
                }}
                source={{uri: user.profile[0].src}}
              />
            </Animated.View>
          ))}
      </View>
      <View style={{height: 20}}></View>
    </View>
  );
};

export default Choice;
