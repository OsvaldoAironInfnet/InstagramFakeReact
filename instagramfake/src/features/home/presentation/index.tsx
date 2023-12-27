import { Alert, Flex, Heading, Input, Row, ScrollView } from "native-base";
import { Divider } from 'native-base';
import { Text } from "native-base";
import { View,Link,Box,Center} from "native-base";
import { Image} from 'react-native';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../design/ui/components/button";
import React, { useState } from 'react';
import HomeHeader from "./components/header";


export default function Home({navigation}) {
 
  return (
    <View backgroundColor={'primary.200'} p={4} flex={1}  alignItems="center">
      <SafeAreaView>
      <ScrollView>
            <HomeHeader title="InstagramFake" feedButton={true} likesButton={true} directButton={true}  />
      
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