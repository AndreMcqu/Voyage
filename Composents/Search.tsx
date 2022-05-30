import { StyleSheet, Text, View, ViewBase, SafeAreaView, TextInput, Pressable } from 'react-native';
import React from 'react';

export const Find = () => {
    const [search, onChange] = React.useState('')
    const update = (search: string) => {
        onChange(search);
    };
    return (
        <View style={styles.Finder}>
            <View>
                <TextInput
                    placeholder='Where to ?'
                    onChangeText={update}
                    value={search} />
            </View>
            <View style={styles.ctmbtn}>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'black' }, styles.btn]}>
                    <Text style={{color:'white'}}>Let's go</Text>
                </Pressable>
            </View>
        </View >


    )
};

const styles = StyleSheet.create({
    Finder: {
        width: '90%',
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems:'center',
    },
    ctmbtn: {
        position: 'absolute',
        right:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        justifyContent: 'center',
        borderRadius: 10,
        height: 40,
        width:60,
        left:5,
    },
});