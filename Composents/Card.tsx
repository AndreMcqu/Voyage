import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewBase, Button, ImageBackground, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer, Route, useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Composents/RootNavigat';

interface trips {
    pays:string
    titre:string
    photo:any
    key:number
}

export const Card : React.FC<trips> = ({pays, titre, photo, key}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
    
        
        <View style={styles.cardcontainer}>
            <ImageBackground source={photo}  style={styles.ig} >
                <View style={styles.card}>
                    <TouchableOpacity style={styles.btncard} onPress={() => navigation.navigate('Voyage')}>
                        <View style={styles.cardtxt}>
                        <Text style={styles.crdtxt}>{pays}</Text>
                        <Text style={styles.crdtxt}>{titre}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width : 250,
        padding: 5
    },
    ig:{
        resizeMode: 'cover',
        overflow: 'hidden',
        flex: 1,
        width: '100%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:30
    },
    card: {
        flex: 1,
        width: '100%',
    },
    btncard:{
        flex: 1,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    cardtxt: {
        flex: 0.25,
        backgroundColor: 'white',
        opacity:0.6,
        width: '100%',
        position:'absolute',
    },
    crdtxt:{
        left:20,
        fontSize:15,
    },
    
});