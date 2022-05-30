// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Accueil from '../SCREENS/Accueil'
import Circuits from '../SCREENS/Circuits';
import Contact from '../SCREENS/Contact'
import Service from '../SCREENS/Service';
import Voyage from '../SCREENS/Voyage'

export type RootStackParamList = {
    Accueil: undefined;
    Contact: undefined;
    Service: undefined;
    Circuits: undefined;
    Voyage: undefined;
  };

const Tab = createBottomTabNavigator<RootStackParamList>();

  export default function Navi() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Accueil' component={Accueil} options={{headerShown: false}} />
          <Tab.Screen name='Service' component={Service} options={{headerShown: false}} />
          <Tab.Screen name='Circuits' component={Circuits} options={{headerShown: false}} />
          <Tab.Screen name='Voyage' component={Voyage} options={{headerShown: false}} />
          <Tab.Screen name='Contact' component={Contact} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }