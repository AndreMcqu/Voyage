import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewBase, Button, ImageBackground, TouchableOpacity, } from 'react-native';
import { RootStackParamList } from '../Composents/RootNavigat';
import { NavigationContainer, Route, useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';



function Service() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headtxt}>Votre</Text>
                <Text style={styles.headtxt}>Depart en</Text>
            </View>
            <ImageBackground style={styles.igcir} source={require('../assets/NorvegeFjords.jpg')}>
                <View style={styles.btnview}>
                    <TouchableOpacity style={styles.cirbtn} onPress={() => navigation.navigate('Circuits')}>
                        <Text style={styles.cirtxt}>CIRCUITS</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ImageBackground style={styles.igcir} source={require('../assets/sejour.jpg')}>
                <View style={styles.btnview}>
                    <Text style={styles.cirtxt}>SEJOUR</Text>
                </View>
            </ImageBackground>
            <ImageBackground style={styles.igcir} source={require('../assets/Ny.jpg')}>
                <View style={styles.btnview}>
                    <Text style={styles.cirtxt}>CORISIERES</Text>
                </View>
            </ImageBackground>
            <ImageBackground style={styles.igcir} source={require('../assets/Usa.jpg')}>
                <View style={styles.btnview}>
                    <Text style={styles.cirtxt}>Billets D'Avion</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    header: {
        flex: 0.6,
        width: '100%',
        backgroundColor: 'white',
    },
    circuits: {
        flex: 1,
        width: '100%',
    },
    cirbtn: {
        flex: 1,
        justifyContent: 'center',
    },
    igcir: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    cirtxt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'white',
        opacity: 0.6,
        fontSize: 30,
    },
    btnview: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    headtxt:{
        top: 15,
        left: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default Service;