import { Alert, Flex, Heading, Input, Row, ScrollView } from "native-base";
import { Divider, Spinner } from 'native-base';
import { Text } from "native-base";
import { View } from "native-base";
import AppGlobalContext from "../../../core/contexts/app_context";
import { useContext } from 'react';
import { Image, ToastAndroid } from 'react-native';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../design/ui/components/button";
import React, { useState } from 'react';
import SignUpViewModel from "./signup_view_model";
import CreateAccountUseCase from "../domain/create_account_usecase";
import SignUpService from "../data/signup_service";



export default function SignUp({ navigation }) {

    const signupViewModel = new SignUpViewModel(new CreateAccountUseCase(new SignUpService()), navigation)
    const appContext = useContext(AppGlobalContext);

    const [stateUsername, setUsername] = useState("");
    const [stateName, setName] = useState("");
    const [stateEmail, setEmail] = useState("");
    const [statePassword, setPassword] = useState("");

    const handleChangeUsername = username => setUsername(username);
    const handleChangeName = name => setName(name);
    const handleChangeEmail = email => setEmail(email);
    const handleChangePassword = password => setPassword(password);

    function onSignUp() {
        signupViewModel.createAccount(stateName, stateEmail, stateUsername, statePassword);
    }

    function navigateToLogin() {
        signupViewModel.navigateToLogin()
    }

    return (
        <View backgroundColor={'primary.200'} h={5} p={5} flex={1} justifyContent="space-evelyn" alignItems="center">
            <SafeAreaView>
                <ScrollView>

                    {
                        appContext?.appContext?.showOrHideToast ? ToastAndroid.show('Conta criada com sucesso !', ToastAndroid.SHORT) : false
                    }

                    {
                        appContext?.appContext?.showOrHideLoading ? <Spinner style={styles.spinnerStyle} size="lg" color="emerald.500" /> : <View>
                            <Heading size="2xl" style={styles.header} color={'secondary.100'}>
                                <Text fontFamily={'body'}>Instagram Fake</Text>
                            </Heading>

                            <View style={styles.inputs}>
                                <Input keyboardType="default" style={styles.inputsInside} variant="rounded" mt={4} placeholder="Nome" onChangeText={handleChangeName} />
                                <Input keyboardType="email-address" style={styles.inputsInside} variant="rounded" mt={4} placeholder="E-mail" onChangeText={handleChangeEmail} />
                                <Input keyboardType="default" style={styles.inputsInside} variant="rounded" mt={4} placeholder="Username" onChangeText={handleChangeUsername} />
                                <Input type="password" style={styles.inputsInside} variant="rounded" mt={4} placeholder="Password" onChangeText={handleChangePassword} />
                            </View>

                            <Flex width="100%">
                                <CustomButton rounded="full" content="Sign up" variation="tertiary" handleClick={() => onSignUp()} />
                            </Flex>

                            <Row style={styles.l_divider}>
                                <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
                                <Text color={'secondary.100'} style={styles.label_divider}>Ou</Text>
                                <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
                            </Row>
                            <CustomButton style={styles.btn_facebook} content="Faça o Login" variationBtn="link" handleClick={() => navigateToLogin()} />
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
    inputs: {
        marginTop: 35,
        width: '100%',
        color: 'white'
    },
    inputsInside: {
        paddingTop: 10,
        paddingBottom: 20,
        borderColor: 'white',
        color: 'white'
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
    spinnerStyle: {
        flex: 1,
        marginTop: 240,
        justifyContent: 'center',
        alignItems: 'center',
    },
});