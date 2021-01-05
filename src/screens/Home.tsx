import React, {FunctionComponent, useCallback} from 'react';
import {GestureResponderEvent} from 'react-native';
import TinderLogo from '../../assets/images/logo/Tinder_Logo.svg';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import {StackScreenProps} from '@react-navigation/stack';
import View from '../components/atoms/View';
import LinearGradientAtom from '../components/atoms/LinearGradient';

const Home: FunctionComponent<StackScreenProps<any, any>> = ({navigation}) => {
  const googleLogin = useCallback((event: GestureResponderEvent) => {
    console.log('google', event);
  }, []);

  const kakaoLogin = useCallback((event: GestureResponderEvent) => {
    console.log('kakao', event);
  }, []);

  const login = useCallback((event: GestureResponderEvent) => {
    navigation.navigate('LogIn');
  }, []);

  return (
    <LinearGradientAtom
      colors={['#FF655B', '#FF5864', '#FD297B']}
      flex={1}
      flexDirection={'column'}
      padding={'30px'}>
      <View
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}>
        <TinderLogo width={'50%'} height={'55px'} />
      </View>
      <View
        flex={1}
        justifyContent={'flex-end'}
        alignItems={'center'}
        marginBottom={'15px'}>
        <Text textAlign={'center'} color={'white'}>
          로그인을 누르시면 이용약관에 동의하는 것으로 간주됩니다. 개인정보
          취급방침 및 쿠키정책에서 회원 정보 처리 방법을 확인하실 수 있습니다.
        </Text>
      </View>
      <View width={'100%'} height={'20%'}>
        <Button
          title={'구글 로그인'}
          backgroundColor={'white'}
          onPress={googleLogin}
          icon={'google'}
        />
        <Button
          title={'카카오 로그인'}
          backgroundColor={'white'}
          onPress={kakaoLogin}
          icon={'kakao'}
        />
        <Button
          title={'전화번호 로그인'}
          backgroundColor={'white'}
          onPress={login}
          icon={'tel'}
        />
      </View>
    </LinearGradientAtom>
  );
};

export default Home;
