import React from 'react';
import {IProps} from './type';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import GoogleLogo from '../../../../assets/images/logo/google.svg';
import KakaoLogo from '../../../../assets/images/logo/kakao-talk.svg';
import TelLogo from '../../../../assets/images/logo/talk-chat-conversation-svgrepo-com.svg';

import {View} from 'react-native';

interface StyledProps {
  backgroundColor: string;
}

const TouchableOpacityButton = styled.TouchableOpacity`
  background-color: ${(props: StyledProps) => props.backgroundColor};
  margin-bottom: 15px;
  border-radius: 20px;
`;

const ButtonIconView = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

const IconView = styled.View`
  width: 30px;
  margin-left: 15px;
`;

const TitleView = styled.View`
  flex: 1;
  height: 100px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #424242;
  text-align: center;
`;

const LogInIcon = styled(Icon)`
  text-align: center;
`;

const getIcon = (icon: string) => {
  if (icon === 'google') {
    return (
      <View>
        <GoogleLogo width={'50%'} height={24} />
      </View>
    );
  } else if (icon === 'kakao') {
    return (
      <View>
        <KakaoLogo width={'50%'} height={24} />
      </View>
    );
  } else if (icon === 'tel') {
    return (
      <View>
        <TelLogo width={'50%'} height={100} />
      </View>
    );
  } else {
    return <LogInIcon name={icon} size={20} />;
  }
};

const Button = ({title, backgroundColor, onPress, icon}: IProps) => {
  return (
    <TouchableOpacityButton backgroundColor={backgroundColor} onPress={onPress}>
      <ButtonIconView>
        <IconView>{getIcon(icon)}</IconView>
        <TitleView>
          <ButtonText>{title}</ButtonText>
        </TitleView>
      </ButtonIconView>
    </TouchableOpacityButton>
  );
};

export default Button;
