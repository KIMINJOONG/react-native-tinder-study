import React from 'react';
import View from '../components/atoms/View';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Choice from './Choice';
import Like from './Like';
import ChatRooms from './ChatRooms';
import MyPage from './MyPage';

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  return (
    <View flex={1}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          activeTintColor: '#e91e63',
          labelStyle: {fontSize: 12},
          style: {marginTop: 30},
        }}
        tabBarPosition={'top'}>
        <Tab.Screen
          name="Choice"
          component={Choice}
          options={{
            tabBarIcon: ({color, size}: any) => (
              <Icon name="flame-outline" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={Like}
          options={{
            tabBarIcon: ({color, size}: any) => (
              <Icon name="star-outline" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="ChatRooms"
          component={ChatRooms}
          options={{
            tabBarIcon: ({color, size}: any) => (
              <Icon name="chatbubbles-outline" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPage}
          options={{
            tabBarIcon: ({color, size}: any) => (
              <Icon name="person-outline" color={'black'} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Main;
