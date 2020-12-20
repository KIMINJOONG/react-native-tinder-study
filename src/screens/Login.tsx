import React, {useCallback, useState} from 'react';
import {Platform, TouchableOpacity, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

interface IProps {
  navigation: StackNavigationProp<any, 'Login'>;
}

interface ITextInputStyleProps {
  platform: string;
}

interface ITextFooterProps {
  marginTop: string;
}

const LoginContainer = styled.View`
  flex: 1;
  background-color: #fd297b;
`;

const Header = styled(LinearGradient)`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 20px;
  padding-bottom: 50px;
`;

const Footer = styled(Animatable.View)`
  flex: 3;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-horizontal: 20px;
  padding-vertical: 30px;
`;

const TextHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

const TextFooter = styled.Text`
  color: #05375a;
  font-size: 18px;
  margin-top: ${(props: ITextFooterProps) => props.marginTop};
`;

const Action = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  margin-top: ${(props: ITextInputStyleProps) =>
    props.platform === 'ios' ? 0 : -12};
  color: #05375a;
  padding-left: 10px;
`;

const ButtonView = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const LogInLinearGradient = styled(LinearGradient)`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const LoginText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const SignUpText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ff655b;
`;

const SignUpTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #ff655b;
  border-width: 1px;
  margin-top: 15px;
`;

const Login = ({navigation}: IProps) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = useCallback(
    (value: string) => {
      if (value.length !== 0) {
        setData({
          ...data,
          email: value,
          checkTextInputChange: true,
        });
      } else {
        setData({
          ...data,
          email: value,
          checkTextInputChange: false,
        });
      }
    },
    [data],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      setData({
        ...data,
        password: value,
      });
    },
    [data],
  );

  const updateSecureTextEntry = useCallback(() => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }, [data]);

  return (
    <LoginContainer>
      <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
      <Header colors={['#FF655B', '#FF5864', '#FD297B']}>
        <TextHeader>로그인</TextHeader>
      </Header>
      <Footer animation={'fadeInUpBig'}>
        <TextFooter marginTop={'0px'}>아이디</TextFooter>
        <Action>
          <FontAwesome name={'user-o'} color={'#FF655B'} size={20} />
          <TextInput
            placeholder={'아이디를 입력해주세요.'}
            platform={Platform.OS}
            autoCapitalize={'none'}
            onChangeText={(value) => textInputChange(value)}
          />
          {data.checkTextInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name={'check-circle'} color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </Action>
        <TextFooter marginTop={'35px'}>비밀번호</TextFooter>
        <Action>
          <FontAwesome name={'lock'} color={'#FF655B'} size={20} />
          <TextInput
            placeholder={'비밀번호를 입력해주세요.'}
            secureTextEntry={data.secureTextEntry ? true : false}
            platform={Platform.OS}
            autoCapitalize={'none'}
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            ) : (
              <Feather name={'eye'} color={'grey'} size={20} />
            )}
          </TouchableOpacity>
        </Action>

        <ButtonView>
          <LogInLinearGradient colors={['#FF655B', '#FF5864', '#FD297B']}>
            <LoginText>로그인</LoginText>
          </LogInLinearGradient>
          <SignUpTouchableOpacity>
            <SignUpText onPress={() => navigation.navigate('SignUp')}>
              회원가입
            </SignUpText>
          </SignUpTouchableOpacity>
        </ButtonView>
      </Footer>
    </LoginContainer>
  );
};

export default Login;
