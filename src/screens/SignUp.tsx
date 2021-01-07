import React, {useCallback, useEffect, useState} from 'react';
import {Platform, TouchableOpacity, StatusBar, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import TextInput from '../components/atoms/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import {userJoinAction} from '../actions/user/action';
import {RootState} from '../reducers';
import View from '../components/atoms/View';
import LinearGradientAtom from '../components/atoms/LinearGradient';
import Text from '../components/atoms/Text';
import AnimatableViewAtom from '../components/atoms/AnimatableView';
import TouchableOpacityAtom from '../components/atoms/TouchableOpacity';

interface IProps {
  navigation: StackNavigationProp<any, 'Login'>;
}

const SignUp = ({navigation}: IProps) => {
  const dispatch = useDispatch();
  const {joinDone, join} = useSelector((state: RootState) => state.user);
  const [data, setData] = useState({
    id: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
    confirmPassword: '',
    confirmSecureTextEntry: true,
  });

  const textInputChange = useCallback(
    (value: string) => {
      if (value.length !== 0) {
        setData({
          ...data,
          id: value,
          checkTextInputChange: true,
        });
      } else {
        setData({
          ...data,
          id: value,
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

  const handleConfirmPasswordChange = useCallback(
    (value: string) => {
      setData({
        ...data,
        confirmPassword: value,
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

  const updateConfirmSecureTextEntry = useCallback(() => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  }, [data]);

  const onClickJoin = useCallback(() => {
    const dataForm = {
      id: data.id,
      password: data.password,
    };
    dispatch(userJoinAction(dataForm));
  }, [data]);

  useEffect(() => {
    if (joinDone) {
      Alert.alert(join.message);
    }
  }, [joinDone]);

  return (
    <View flex={1} backgroundColor={'#fd297b'}>
      <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
      <LinearGradientAtom
        colors={['#FF655B', '#FF5864', '#FD297B']}
        flex={1}
        justifyContent={'flex-end'}
        paddingHorizontal={'20px'}
        paddingBottom={'50px'}>
        <Text color={'#fff'} fontWeight={'bold'} fontSize={'30px'}>
          회원가입
        </Text>
      </LinearGradientAtom>
      <AnimatableViewAtom
        animation={'fadeInUpBig'}
        flex={3}
        backgroundColor={'#fff'}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        paddingHorizontal={20}
        paddingVertical={30}>
        <Text color={'#05375a'} fontSize={'18px'} marginTop={'0px'}>
          아이디
        </Text>
        <View
          flexDirection={'row'}
          marginTop={'10px'}
          borderBottomWidth={'1px'}
          borderBottomColor={'#f2f2f2'}
          paddingBottom={'5px'}>
          <FontAwesome name={'user-o'} color={'#FF655B'} size={20} />
          <TextInput
            placeholder={'아이디를 입력해주세요.'}
            platform={Platform.OS}
            autoCapitalize={'none'}
            onChangeText={(value: string) => textInputChange(value)}
            flex={1}
            marginTopAndroid={'-12px'}
            marginTopIOS={'0px'}
            color={'#05375a'}
            paddingLeft={'10px'}
            secureTextEntry={false}
            value={data.id}
          />
          {data.checkTextInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name={'check-circle'} color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text marginTop={'35px'}>비밀번호</Text>
        <View
          flexDirection={'row'}
          marginTop={'10px'}
          borderBottomWidth={'1px'}
          borderBottomColor={'#f2f2f2'}
          paddingBottom={'5px'}>
          <FontAwesome name={'lock'} color={'#FF655B'} size={20} />
          <TextInput
            placeholder={'비밀번호를 입력해주세요.'}
            secureTextEntry={data.secureTextEntry ? true : false}
            platform={Platform.OS}
            autoCapitalize={'none'}
            onChangeText={(value: string) => handlePasswordChange(value)}
            flex={1}
            marginTopAndroid={'-12px'}
            marginTopIOS={'0px'}
            color={'#05375a'}
            paddingLeft={'10px'}
            value={data.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            ) : (
              <Feather name={'eye'} color={'grey'} size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text color={'#05375a'} fontSize={'18px'} marginTop={'35px'}>
          비밀번호
        </Text>
        <View
          flexDirection={'row'}
          marginTop={'10px'}
          borderBottomWidth={'1px'}
          borderBottomColor={'#f2f2f2'}
          paddingBottom={'5px'}>
          <FontAwesome name={'lock'} color={'#FF655B'} size={20} />
          <TextInput
            placeholder={'비밀번호 확인을 입력해주세요.'}
            secureTextEntry={data.confirmSecureTextEntry ? true : false}
            platform={Platform.OS}
            autoCapitalize={'none'}
            onChangeText={(value: string) => handleConfirmPasswordChange(value)}
            flex={1}
            marginTopAndroid={'-12px'}
            marginTopIOS={'0px'}
            color={'#05375a'}
            paddingLeft={'10px'}
            value={data.confirmPassword}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirmSecureTextEntry ? (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            ) : (
              <Feather name={'eye'} color={'grey'} size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View
          marginTop={'50px'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          borderBottomColor={'#f2f2f2'}
          borderBottomWidth={'1px'}>
          <LinearGradientAtom
            colors={['#FF655B', '#FF5864', '#FD297B']}
            width={'100%'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'10px'}>
            <Text
              fontSize={'18px'}
              fontWeight={'bold'}
              color={'#fff'}
              onPress={onClickJoin}>
              회원가입
            </Text>
          </LinearGradientAtom>
          <TouchableOpacityAtom
            width={'100%'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'10px'}
            borderColor={'#ff655b'}
            borderWidth={'1px'}
            marginTop={'15px'}>
            <Text
              fontSize={'18px'}
              fontWeight={'bold'}
              color={'#ff655b'}
              onPress={() => navigation.goBack()}>
              로그인
            </Text>
          </TouchableOpacityAtom>
        </View>
      </AnimatableViewAtom>
    </View>
  );
};

export default SignUp;
