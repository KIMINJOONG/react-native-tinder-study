import React, {FunctionComponent, useCallback} from 'react';
import {View, StyleSheet, Text, GestureResponderEvent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TinderLogo from '../../assets/images/logo/Tinder_Logo.svg';
import Button from '../components/atoms/Button';

const Home: FunctionComponent = ({navigation}: any) => {
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
    <LinearGradient
      colors={['#FF655B', '#FF5864', '#FD297B']}
      style={styles.linearGradient}>
      <View style={styles.logoContainer}>
        <TinderLogo width={'50%'} height={'55px'} />
      </View>
      <View style={styles.textItem}>
        <Text style={styles.text}>
          로그인을 누르시면 이용약관에 동의하는 것으로 간주됩니다. 개인정보
          취급방침 및 쿠키정책에서 회원 정보 처리 방법을 확인하실 수 있습니다.
        </Text>
      </View>
      <View style={styles.loinButtonContainer}>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
  },
  textItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  loinButtonContainer: {
    width: '100%',
    height: '20%',
  },
});

export default Home;
