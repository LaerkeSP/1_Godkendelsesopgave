import React from "react";
import {StyleSheet, Text, View} from "react-native";

function EventsScreen({prop}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello from Events
            </Text>
        </View>
    )
}

export default EventsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavenderblush',
    },
    text: {
        fontSize: 20,
    },
});