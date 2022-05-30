import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewBase, Button, ImageBackground, TouchableOpacity, } from 'react-native';
import { NavigationContainer, Route, useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Composents/RootNavigat';


function Accueil() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.back} source={require('../assets/Background.jpg')}>
        <View style={styles.header}>
          <Image style={styles.homeheader} source={require('../assets/LOGO.png')} />
        </View>
        <View style={styles.body}>
          <Text style={styles.bytxt}>creature des voyages de reve depuis 1958 </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Service')}>
            <Text style={styles.btntext}>Decouvrir</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    flex: 1,
    width: '100%'
  },
  header: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeheader: {},
  body: {
    flex: 8,
    width: '100%',
    
  },
  Body: {
    justifyContent: 'flex-start'
  },
  bottom: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '60%',
    height: 60,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 5,

  },
  btntext: {
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  bytxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },

});

export default Accueil;
