import { Container, FavouriteIcon, Image, MoonIcon, View, Center, CheckIcon } from "native-base";
import { StyleSheet, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";
import { Text, Heading, AddIcon, ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, FlatList } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    feeds: Feed[]
}

export class Feed {
    image: string;
    profileName;
    id;

    constructor(imageParam: string, profileNameParam: string, idParam: string) {
        this.image = imageParam;
        this.profileName = profileNameParam;
        this.id = idParam;
    }
}

export default function HomeFeed({ feeds }: Props) {

    function showAlert(funcButton: string) {
        let description = "Funcionalidade de " + funcButton + " não implementada!"
        ToastAndroid.show(description, ToastAndroid.SHORT)
    }

    const icons = [{
        icon: <TouchableOpacity onPress={() => showAlert('Likes')}><FavouriteIcon style={styles.icons} /></TouchableOpacity>,
        iconName: "favourite-icon",
        showButton: true
    }, {
        icon: <TouchableOpacity onPress={() => showAlert('Direct')}><CheckIcon style={styles.icons} /></TouchableOpacity>,
        iconName: "direct-messages",
        showButton: true
    }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={feeds} horizontal={false} renderItem={({ item }) => (
                <View>
                    <View>
                        <Text style={styles.profileName} fontFamily={'body'} color={'secondary.100'}>{item.profileName}</Text>
                        <Image size={400} borderRadius={12} source={{
                            uri: item.image
                        }} alt="Alternate Text" />
                    </View>
                    <FlatList data={icons} horizontal={true} renderItem={({ item }) => (
                        <View style={styles.items_icn}>
                            {item.icon}
                        </View>
                    )} />
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
        flexDirection: 'column',
        marginTop: 16
    },

    profileName: {
        paddingTop: 30,
        paddingLeft: 5,
        paddingBottom: 10
    },
    items_icn: {
        paddingTop: 5,
        paddingLeft: 8,
        paddingRight: 15
    }
});