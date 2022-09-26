import React from "react";
import {StyleSheet, Text, View} from "react-native";

function HomeScreen({prop}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {prop}
            </Text>
        </View>
    );
}

export default HomeScreen;

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