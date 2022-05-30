import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../Composents/RootNavigat';
import { NavigationContainer, Route, useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function App() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <View style={styles.igview} >
                <ImageBackground style={styles.ig} source={require('../assets/NorvegeFjords.jpg')}>
                    <View style={styles.igtxt}>
                        <View>
                            <Text style={styles.txt}>NORVEGE</Text>
                            <Text style={styles.txt}>Grand Panorama de Fjords</Text>
                        </View>
                        <View style={styles.txtprice}>
                            <Text style={styles.txt}>1377 €</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <Text style={styles.tttxt}>Highlights - Points forts</Text>
                    <Text style={styles.infotxt}>Oslo</Text>

                    <Text style={styles.infotxt}>Geilo</Text>
                    <Text style={styles.infotxt}>Hardangerfjord</Text>
                    <Text style={styles.infotxt}>Cascade de   Steindalsfoss</Text>
                    <Text style={styles.infotxt}>Bergen</Text>
                    <Text style={styles.infotxt}>Sognefjord</Text>
                    <Text style={styles.infotxt}>Valdres</Text>
                    <Text style={styles.infotxt}>Geirangerfjord</Text>
                    <Text style={styles.infotxt}>Ålesund</Text>
                    <Text style={styles.infotxt}>Parc national de Jotunheimen</Text>
                    <Text style={styles.infotxt}>Route des trolls</Text>
                    <Text style={styles.infotxt}>Région de Otta</Text>
                    <Text style={styles.infotxt}>Lillehammer</Text>
                    <Text style={styles.tttxt}>Programme</Text>
                    <Text style={styles.infotxt}>JOUR 1 - FRANCE / OSLO</Text>
                    <Text style={styles.infotxt}>JOUR 2 - DE OSLO À GEILO</Text>
                    <Text style={styles.infotxt}>JOUR 3 - GEILO, HARDANGERFJORD & RÉGION DE BERGEN</Text>
                    <Text style={styles.infotxt}>JOUR 4 - BERGEN, SOGNEFJORD & VALDRES</Text>
                    <Text style={styles.infotxt}>JOUR 5 - VALDRES, GEIRANGERFJORD & ÅLESUND</Text>
                    <Text style={styles.infotxt}>JOUR 6 - ÅLESUND, ROUTE DES TROLLS & RÉGION DE OTTA</Text>
                    <Text style={styles.infotxt}>JOUR 7 - OTTA, LILLEHAMMER & OSLO</Text>
                    <Text style={styles.infotxt}>JOUR 8 - OSLO / FRANCE</Text>
                </ScrollView>
            </View>
            <View style={styles.button} >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.btntext}>Réservez</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ig: {
        flex: 1,
        overflow: 'hidden',
        resizeMode: 'cover',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'flex-end',
        marginVertical: 15,
        marginHorizontal: 15,
    },
    igview: {
        flex: 4,
        justifyContent: 'flex-end',
    },
    body: {
        flex: 7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    igtxt: {
        flexDirection: 'row',
        backgroundColor: 'black',
        opacity: 0.6,
    },
    txt: {
        color: 'white',
        margin: 7
    },
    txtprice: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'white',
        margin: 7
    },
    infotxt: {
        color: 'black',
        margin: 7
    },
    tttxt: {
        color: 'black',
        margin: 7,
        fontWeight: 'bold',
        fontSize: 30,

    },
    btn: {
        width: '50%',
        height: 60,
        padding: 10,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        paddingTop: 5,
    
      },
      btntext: {
        justifyContent: 'flex-start',
        textAlignVertical: 'center',
        fontSize: 30,
      },
});
