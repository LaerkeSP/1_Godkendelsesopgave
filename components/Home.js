import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import EventsScreen from "./screens/Events";
import SettingsScreen from "./screens/Settings";
import SubscribedScreen from "./screens/Subscribed";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen({prop}){
    const Tab = createBottomTabNavigator();
    
    return(
        <Tab.Navigator>
            <Tab.Screen
                name={'Subscribed'}
                component={SubscribedScreen}
                options={
                    {tabBarIcon: () => (<Ionicons name='star' size={20} />), headerShown:null}
                }
            />
            <Tab.Screen
                name={'Events'}
                component={EventsScreen}
                options={
                    {tabBarIcon: () => (<Ionicons name='calendar' size={20} />), headerShown:null}
                } />
            <Tab.Screen
                name={'Settings'}
                component={SettingsScreen}
                options={
                    {tabBarIcon: () => (<Ionicons name='settings' size={20} />), headerShown:null}
                } />
        </Tab.Navigator>
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