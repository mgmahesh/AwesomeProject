

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import SignIn from './src/components/screens/SignInComponent';
import Home from './src/components/screens/HomeScreen';
import Orders from './src/components/screens/OrdersScreen';


const App = () => {
  return (
    <NativeBaseProvider>
      {/* <SignIn></SignIn> */}
      {/* <Home></Home> */}
      <Orders></Orders>
    </NativeBaseProvider>
  );
};

const main_styles = StyleSheet.create({

});

export default App;
