

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from "react-redux";
import store from './src/Redux/store';
import { NativeBaseProvider, Box } from "native-base";
import SignIn from './src/components/screens/SignInComponent';
import Home from './src/components/screens/HomeScreen';
import Orders from './src/components/screens/OrdersScreen';


const App = () => {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <SignIn></SignIn>
      {/* <Home></Home> */}
      {/* <Orders></Orders> */}
    </NativeBaseProvider>
    </Provider>
  );
};

const main_styles = StyleSheet.create({

});

export default App;
