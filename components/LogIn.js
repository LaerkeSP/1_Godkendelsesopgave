import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import firebase from "firebase/compat";


async function handleSubmit({email, password, setErrorMessage}){
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
        });

    } catch (error){
        setErrorMessage(error.message)
    }
}

function LogInScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);


    const logInButton = () => {
        return <Button onPress={() =>
            handleSubmit({email, password, setErrorMessage})}
                       title="Login"
                       color='black'
        />;
    };

    return(
        <View style={styles.border}>
            <Text style={styles.header}>Log in</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {logInButton()}
            <Button title={'Create new user'} onPress={() => navigation.navigate('Sign up')}/>
        </View>
    );
}

export default LogInScreen;

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontStyle: "italic",
        paddingTop: 10,
        paddingBottom: 10
    },
    inputField: {
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 15,
        borderColor: 'grey'
    },
    header: {
        fontSize: 40,
        paddingBottom: 20
    },
    border: {
        margin: 20
    }
});