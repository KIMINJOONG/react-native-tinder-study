import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const index = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name={'LogIn'}
          component={Login}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name={'Main'}
          component={Main}
          options={() => ({headerShown: false})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
