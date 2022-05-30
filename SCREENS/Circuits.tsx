import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase, ScrollView, TouchableOpacity } from 'react-native';
import { data } from '../assets/data';
import { Card } from '../Composents/Card';
import { Cardrecom } from '../Composents/Cardrecom';
import { Find } from '../Composents/Search';

interface trips {
    pays: string
    titre: string
    photo: any
}


const Circuits: React.FC<trips> = ({ pays, titre, photo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headtxt}>Découvrir</Text>
                <Text style={styles.headtxt}>Votre prochain Voyage</Text>
            </View>
            <View style={styles.search}>
                <Find />
            </View>
            <View style={styles.circuits}>
                <View style={styles.cirtxt}>
                    <Text style={styles.btmtxt}>Circuits</Text>
                </View>
                <View style={styles.select}>
                    <TouchableOpacity>
                        <Text>Tout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Nouveatés</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Meilleures Ventes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iptcard}>
                    <ScrollView style={styles.circard} horizontal>
                        {data.map((item: trips, key: number) =>
                            <Card key={key} pays={item.pays} titre={item.titre} photo={item.photo} />
                        )}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.recom}>
                <View>
                    <Text style={styles.btmtxt}>Recommendations</Text>
                </View>
                <ScrollView style={styles.circard} horizontal>
                {data.map((item: trips, key: number) =>
                <Cardrecom key={key} titre={item.titre} pays={item.pays} photo={item.photo} />
                )}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0.40,
        width: '100%',
        backgroundColor: 'white',
    },
    headtxt:{
        top: 15,
        left: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    search: {
        flex: 0.4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    circuits: {
        flex: 1.25,
        width: '100%',
        backgroundColor: 'white',
    },
    cirtxt: {
        flex: 1,
        backgroundColor: 'white',
    },
    select: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    },
    recom: {
        flex: 0.75,
        width: '100%',
        backgroundColor: 'white',
    },
    iptcard: {
        flexDirection: 'row',
        flex: 8,
    },
    circard: {
        flex: 8,
        flexDirection: 'row',
        
    },
    btmtxt:{
        left: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Circuits;