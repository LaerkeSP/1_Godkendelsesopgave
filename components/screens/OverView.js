import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../Home";
import EventsScreen from "./Events";
import SettingsScreen from "./Settings";

const Tab = createBottomTabNavigator();

const settingsScreenText = "Dette er SettingsScreen!"
const eventScreenText = "Dette er EventsScreen!"
const homeScreenText = "Dette er HomeScreen!"

function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ],
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={'home-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Events') {
                        return (
                            <Ionicons
                                name='calendar'
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Settings') {
                        return (
                            <Ionicons
                                name='md-settings-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                    else{
                        return (
                            <Ionicons
                                name='md-list-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
            >
                <Tab.Screen name="Settings" children={() => <SettingsScreen prop={settingsScreenText} />} />
                <Tab.Screen name="Home" children={() => <HomeScreen />} prop={homeScreenText} />
                <Tab.Screen name="Events" children={() => <EventsScreen prop={eventScreenText} />} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation