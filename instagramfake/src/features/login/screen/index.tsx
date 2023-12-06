import { Flex, Heading, Input, Row, ScrollView } from "native-base";
import { Divider } from 'native-base';
import { Text } from "native-base";
import { View,Link,Box,Center} from "native-base";
import { Image} from 'react-native';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../design/ui/components/button";

export default function Login() {
  const img = require('../../../../images/logo.png');
  // <Image  style={styles.image} size={30} borderRadius={100} source={{uri: img.default.src}} alt="SignUp" />
  return (
    <View backgroundColor={'primary.200'} h={5} p={5} flex={1} justifyContent="space-evelyn" alignItems="center">
      <SafeAreaView>
      <ScrollView>
    
      <Image style = {styles.image} source={img} />
 
      <Heading size="2xl" style={styles.header} color={'secondary.100'}>
        <Text fontFamily={'body'}>Instagram Fake</Text>
      </Heading>
      <View style={styles.inputs}>
        <Input mt={4} />
        <Input mt={4} />
      </View>

      <Text color={'secondary.100'} style={styles.label_forgot}>Esqueceu sua senha?</Text>
      <Flex width="100%">
        <CustomButton content="Log In" variation="tertiary" />
      </Flex>

      <Row style={styles.l_divider}>
        <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
        <Text color={'secondary.100'} style={styles.label_divider}>Ou</Text>
        <Divider my="4" style={styles.divider} _light={{ bg: 'secondary.100' }} />
      </Row>
      <CustomButton style={styles.btn_facebook} content="Entre com facebook" variationBtn="link" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    marginTop: 36,
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
  }
});