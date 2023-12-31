import { Container, FavouriteIcon, Image, MoonIcon, View } from "native-base";
import { StyleSheet, TouchableOpacity,ToastAndroid } from "react-native";
import { Text, Heading, AddIcon, ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, FlatList } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    feedButton: boolean;
    likesButton: boolean;
    directButton: boolean;
    title: string
}

export default function HomeHeader({ title, feedButton, likesButton, directButton }: Props) {

    function showAlert(funcButton: string) {
        let description = "Funcionalidade de " + funcButton + " não implementada!"
        ToastAndroid.show(description, ToastAndroid.SHORT)
    }

    const icons = [{
        icon: <TouchableOpacity onPress={() => showAlert('Publicação no Feed')}><AddIcon style={styles.icons} /></TouchableOpacity>,
        iconName: "add",
        showButton: feedButton
    }, {
        icon: <TouchableOpacity onPress={() => showAlert('Visualização de Likes')}><FavouriteIcon style={styles.icons} /></TouchableOpacity>,
        iconName: "favourite-icon",
        showButton: likesButton
    }, {
        icon: <TouchableOpacity onPress={() => showAlert('Mensagens Direct')}><MoonIcon style={styles.icons} /></TouchableOpacity>,
        iconName: "direct-messages",
        showButton: directButton
    }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Heading size="lg" color={'secondary.100'} style={styles.header}>
                <Text fontFamily={'body'}>{title}</Text>
            </Heading>

            <FlatList data={icons} horizontal={true} renderItem={({ item }) => (
                <View style={styles.items}>
                    {item.icon}
                </View>
            )} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    icons: {
        height: 24,
        width: 24,
    },
    header: {
        marginRight: 50,
    },
    container: {
        flexDirection: 'row'
    },

    items: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15
    }
});