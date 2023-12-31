import { Alert, Flex, Heading, Input, Row, ScrollView } from "native-base";
import { Divider, Spinner } from 'native-base';
import { Text } from "native-base";
import { View, Link, Box, Center } from "native-base";
import AppGlobalContext from "../../../core/contexts/app_context";
import { useContext } from 'react';
import { Image } from 'react-native';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../design/ui/components/button";
import LoginViewModel from "./login_view_model";
import React, { useState } from 'react';
import LoginService from "../data/api/login_service";
import AuthenticateUseCase from "../domain/authenticate_usecase";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import LoginRepository from "../data/login_repository";
import SaveDataLoginUseCase from "../domain/save_data_login_usecase";

export default function Login({ navigation }) {
  const img = require('../../../../images/logo.png');
  const appContext = useContext(AppGlobalContext);
  const loginService = new LoginService();
  const loginRepository = new LoginRepository(loginService);

  const loginViewModel = new LoginViewModel(new AuthenticateUseCase(loginRepository), new SaveDataLoginUseCase(loginRepository), navigation);

  const [statePassword, setPassword] = useState("");
  const [stateUsername, setUsername] = useState("");

  const handleChangePassword = password => setPassword(password);
  const handleChangeUsername = username => setUsername(username);

  function onLogin() {
    loginViewModel.sendLogin(stateUsername, statePassword);
  }

  function navigateToSignup() {
    loginViewModel.navigateToSignUpScreen()
  }

  return (
    <View backgroundColor={'primary.200'} h={5} p={5} flex={1} justifyContent="space-evelyn" alignItems="center">
      <SafeAreaView>
        <ScrollView>
          {

            appContext?.appContext?.showOrHideLoading ? <Spinner style={styles.spinnerStyle} size="lg" color="emerald.500" /> : <View>
              <GestureHandlerRootView>
                <TouchableOpacity onPress={navigateToSignup}>
                  <Image style={styles.image} source={img} />
                </TouchableOpacity >
              </GestureHandlerRootView>

              <Heading size="2xl" style={styles.header} color={'secondary.100'}>
                <Text fontFamily={'body'}>Instagram Fake</Text>
              </Heading>
              <View style={styles.inputs}>
                <Input mt={4} onChangeText={handleChangeUsername} style={styles.inputsInside} />
                <Input mt={4} onChangeText={handleChangePassword} style={styles.inputsInside} type="password" />
              </View>

              <Text color={'secondary.100'} style={styles.label_forgot}>Esqueceu sua senha?</Text>
              <Flex width="100%">
                <CustomButton content="Log In" variation="tertiary" handleClick={() => onLogin()} />
              </Flex>

              <Row style={styles.l_divider}>
                <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
                <Text color={'secondary.100'} style={styles.label_divider}>Ou</Text>
                <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
              </Row>
              <CustomButton style={styles.btn_facebook} content="Entre com facebook" variationBtn="link" />
            </View>
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    marginTop: 36,
  },
  spinnerStyle: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 80,
    height: 80,
    marginLeft: '80%'
  },
  inputs: {
    marginTop: 35,
    width: '100%'
  },
  label_forgot: {
    marginTop: 15,
    marginLeft: '60%'
  },
  divider_full: {
    width: '100%',
    alignSelf: 'center',

  },
  divider: {
    width: '42%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  },
  label_divider: {
    marginLeft: 20,
    marginRight: 20
  },
  l_divider: {
    marginTop: 25
  },
  btn_facebook: {
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: -10
  },
  inputsInside: {
    borderColor: 'white',
    color: 'white'
  }
});