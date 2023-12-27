
import { NativeBaseProvider } from "native-base";
import APP_THEME from "./src/design/theme";
import AppGlobalContext from "./src/core/contexts/app_context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/features/login/presentation";
import Home from "./src/features/home/presentation";
import { useState } from 'react';

import { SCREEN_ROUTER_HOME, SCREEN_ROUTER_LOGIN,SCREEN_ROUTER_SIGNUP } from "./src/core/config";
import SignUp from "./src/features/signup/presentation";


export default function App() {
  const Stack = createNativeStackNavigator();

  function LoginScreen({ navigation }) {
    return (
      <Login navigation={navigation} />
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <Home navigation={navigation} />
    )
  }

  function SignupScreen({ navigation }) {
    return (
      <SignUp navigation={navigation}/>
    )
  }

  const [appContext, saveAppContext] = useState({  'showOrHideLoading': false, 'bearerToken': '' });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={APP_THEME}>
        <AppGlobalContext.Provider value={{ appContext: appContext, saveAppContext}}>
          <Stack.Navigator initialRouteName={SCREEN_ROUTER_LOGIN}>
            <Stack.Screen name={SCREEN_ROUTER_LOGIN} options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name={SCREEN_ROUTER_HOME} options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name={SCREEN_ROUTER_SIGNUP} options={{headerShown: false}} component={SignupScreen} />


          </Stack.Navigator>
        </AppGlobalContext.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}