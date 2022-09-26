import React from "react";
import {Text, View} from "react-native";

function EventsScreen({prop}){
    return(
        <View>
            <Text>
                {prop}
            </Text>
        </View>
    )
}

export default EventsScreen