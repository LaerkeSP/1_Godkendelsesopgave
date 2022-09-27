import React from "react";
import {StyleSheet, Text, View} from "react-native";

function SettingsScreen({prop}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello from Settings
            </Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcyan',
    },
    text: {
        fontSize: 20,
    },
});