//Importing libraries
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import firebase from "firebase/compat";

//Importing screens
import LogInScreen from "./components/LogIn";
import SignUpScreen from "./components/SignUp";
import HomeScreen from "./components/Home";

const firebaseConfig = {
    apiKey: "AIzaSyDZmVIQi81zXQ7cQtMPEB3c17vDiqJRCQc",
    authDomain: "godkendelsesopgave-7cba8.firebaseapp.com",
    projectId: "godkendelsesopgave-7cba8",
    storageBucket: "godkendelsesopgave-7cba8.appspot.com",
    messagingSenderId: "86437415902",
    appId: "1:86437415902:web:e5d0dbae232c6896d72b4f",
    databaseURL: "https://godkendelsesopgave-7cba8-default-rtdb.europe-west1.firebasedatabase.app/"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default function App() {
  const Stack = createStackNavigator();

  return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Log in'} component={LogInScreen} />
            <Stack.Screen name={'Sign up'} component={SignUpScreen} />
            <Stack.Screen name={'Home'} component={HomeScreen} />
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
