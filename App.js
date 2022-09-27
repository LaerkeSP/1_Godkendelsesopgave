//Importing libraries
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

//Importing screens
import LogInScreen from "./components/LogIn";
import HomeScreen from "./components/Home";


export default function App() {
  const Stack = createStackNavigator();

  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Log in'} component={LogInScreen} />

        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
