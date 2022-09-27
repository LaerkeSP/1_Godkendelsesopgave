import React from "react";
import {StyleSheet, Text, View} from "react-native";

function SubscribedScreen({prop}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello from Subscribed
            </Text>
        </View>
    );
}

export default SubscribedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'honeydew',
    },
    text: {
        fontSize: 20,
    },
});