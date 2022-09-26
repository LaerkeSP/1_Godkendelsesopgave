import React from "react";
import {Text, View} from "react-native";

function SettingsScreen({prop}){
    return(
        <View>
            <Text>
                {prop}
            </Text>
        </View>
    )
}

export default SettingsScreen