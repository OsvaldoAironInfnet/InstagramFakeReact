import { Container, FavouriteIcon, Image, MoonIcon, View, Center } from "native-base";
import { StyleSheet, TouchableOpacity, ToastAndroid,ScrollView } from "react-native";
import { Text, Heading, AddIcon, ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, FlatList } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    stories: Storie[]
}

export class Storie {
    image: string;
    profileName;
    id;

    constructor(imageParam: string, profileNameParam: string, idParam: string) {
        this.image = imageParam;
        this.profileName = profileNameParam;
        this.id = idParam;
    }
}

export type StorieType = {
    image: string;
    profileName: string
    id: string
}

export default function HomeStories({ stories }: Props) {

    function showAlert(funcButton: string) {
        let description = "Funcionalidade de " + funcButton + " não implementada!"
        ToastAndroid.show(description, ToastAndroid.SHORT)
    }
   
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={stories} horizontal={true} renderItem={({ item }) => (
                
                <View style={styles.items}>
                    <View style={styles.container_stories}>
                        <Image size={24} borderRadius={48} source={{
                            uri: item.image
                        }} alt="Alternate Text" />

                        <Text style={styles.profileName} fontFamily={'body'} color={'secondary.100'}>{item.profileName}</Text>
                    </View>
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
        flexDirection: 'row',
        marginTop: 16
    },
    container_stories: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    items: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    profileName: {
        paddingTop: 5,
        paddingLeft: 5
    }
});