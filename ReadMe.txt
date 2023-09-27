Please remove the relevant screen's comment from the App.js file while the evaluation is performing.

First Screen 
---------------------------------------

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

Second Screen 
---------------------------------------

const App = () => {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      {/* <SignIn></SignIn> */}
      <Home></Home>
      {/* <Orders></Orders> */}
    </NativeBaseProvider>
    </Provider>
  );
};

Third Screen 
---------------------------------------

const App = () => {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      {/* <SignIn></SignIn> */}
      {/* <Home></Home> */}
      <Orders></Orders>
    </NativeBaseProvider>
    </Provider>
  );
};