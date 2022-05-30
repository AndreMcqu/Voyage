import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewBase, Button, ImageBackground } from 'react-native';


function Contact() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.back} source={require('../assets/Background.jpg')}>
        <View style={styles.header}>
          <Image style={styles.homeheader} source={require('../assets/LOGO.png')} />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Téléphone :  01 39 50 44 44 </Text>
          <Text style={styles.text}>Téléphone :  04 58 00 53 60</Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>Du Mar. au Ven. de 10h à 13h et de 14h à 18h30</Text>
          <Text style={styles.text}>Le Samedi de 10h à 13h et de 14h00 à 17h00</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>VERSAILLES VOYAGES - Groupe TRAVEL EXPERT</Text>
          <Text style={styles.text}>8 rue Rameau - 78000 Versailles</Text>
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
    justifyContent: 'center',
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
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    opacity: 0.8,
  },
});

export default Contact;