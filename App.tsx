import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from './Composents/Card';
import Navi from './Composents/RootNavigat';
// import Circuits from './SCREENS/Circuits';



export default function App() {
  return (
      <Navi />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
