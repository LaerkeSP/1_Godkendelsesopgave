//Importing libraries
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";

//Importing screens
import LogInScreen from "./components/LogIn";
import SignUpScreen from "./components/SignUp";
import HomeScreen from "./components/Home";
import Home from "./components/Home";

//Firebase kontakt
const firebaseConfig = {
    apiKey: "AIzaSyCBGB0u9LjCnQgKwikPno-3IjXHDX-gfiA",
    authDomain: "godkendelsesopgave-1-a8b61.firebaseapp.com",
    projectId: "godkendelsesopgave-1-a8b61",
    storageBucket: "godkendelsesopgave-1-a8b61.appspot.com",
    messagingSenderId: "1087483840025",
    appId: "1:1087483840025:web:1940c91470608c6879cc88"
};

//Initierer firebase databasen
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


//Funktion for bruger der ikke er logget ind
function guestPage(){
    //Danner en konstant for til at stacke skærme
    const Stack = createStackNavigator();

    //Returnerer de tre screens: Log in og Sign up
    //Disse skærme er stacked og kan derfor kun manureres via knapper
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

//Selve app funktionen
export default function App() {
    //Definerer bruger konstanter der har staten ikke logget ind
    const [user, setUser] = useState({ loggedIn: false });

    //
    function onAuthStateChange(callback) {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback({loggedIn: true, user: user});
            } else {
                callback({loggedIn: false});
            }
        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser);
        return () => {
            unsubscribe();
        };
    }, []);

    //Tjekker om brugerens status er ændret til at være logged ind
    //Hvis brugerens status er ændret kommer brugeren ind til HomeScreen, hvis ikke bliver de på guestPage
    return(
        user.loggedIn ? <HomeScreen /> : guestPage()
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
