import React from 'react';
import Text from '../components/atoms/Text';
import View from '../components/atoms/View';
import {COLORS} from '../utils/constants';

const LikeOrNot = ({type}: any) => {
  const color = COLORS[type];
  return (
    <View
      borderWidth={'7px'}
      paddingHorizontal={'15px'}
      borderRadius={'15px'}
      backgroundColor={'rgba(0, 0, 0, 0.2)'}
      borderColor={color}>
      <Text
        fontSize={'48px'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        letterSpacing={'4px'}
        color={color}>
        {type}
      </Text>
    </View>
  );
};

export default LikeOrNot;
