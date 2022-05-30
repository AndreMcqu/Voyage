import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewBase, Button, ImageBackground, TouchableOpacity, ScrollView, } from 'react-native';

interface trips {
    pays: string
    titre: string
    photo: any
}

export const Cardrecom : React.FC<trips> = ({pays, photo,}) => {
    return (
    
        
        <View style={styles.cardcontainer}>
            <ImageBackground source={photo}  style={styles.ig}>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.btncard}>
                        <View style={styles.cardtxt}>
                        <Text style={styles.rectxt}>{pays}</Text>
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
        width : 200,
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
    rectxt: {
        left: 15,
        fontSize:20
    },
    
});