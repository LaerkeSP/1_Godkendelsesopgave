import React from "react";
import {StyleSheet, Text, View} from "react-native";

function LogInScreen({prop}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello from login
            </Text>
        </View>
    );
}

export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});