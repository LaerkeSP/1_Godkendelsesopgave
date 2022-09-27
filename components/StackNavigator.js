import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from "./Home";
import LogInScreen from "./LogIn";

const Stack = createStackNavigator();

function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Log in'} component={LogInScreen} />
                <Stack.Screen name={'Home'} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNavigator