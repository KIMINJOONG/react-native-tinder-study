/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import Screens from './screens';

const App: () => React.ReactElement = () => {
  return (
      <Provider store={store}>
        <Screens />
      </Provider>
  );
};

export default App;
