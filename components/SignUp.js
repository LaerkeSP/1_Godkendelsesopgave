import React, {useState} from "react";
import {Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import firebase from "firebase/compat";
import route from "react-native/Libraries/Blob/File";


async function handleSignUp({signUpInformation, setSignUpInformation, initialState}){
    const {email, password} = signUpInformation;

    if (email.length === 0 || password.length === 0){
        return(
            Alert.alert('Udfyld venligst email og password')
        )
    }
    try {
        firebase
            .database()
            .ref('/Users/')
            .push({ email, password });
        Alert.alert(`Saved`);
        setSignUpInformation(initialState)
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

}


function SignUpScreen({prop}){
    const initialState = {email: '', password: ''};
    const [signUpInformation, setSignUpInformation] = useState(initialState);
    const isEditsignUpInformation = route.name === 'EditsignUpInformation'


    const changeInput = (name, event) => {
        setSignUpInformation({...signUpInformation, [name]: event});
    }


    return(
        <SafeAreaView>
            <ScrollView style={styles.border}>
                {
                    Object.keys(initialState).map((key, index) => {
                        return(
                            <View>
                                <Text style={styles.text}>{key}</Text>
                                <TextInput
                                    value = {signUpInformation[key]}
                                    onChangeText = {(event) => changeInput(key, event)}
                                    style={styles.inputField}
                                />
                            </View>
                        )
                    })
                }
                <Button title={ isEditsignUpInformation ? "Save changes" : "Add user"} onPress={() => handleSignUp({signUpInformation, setSignUpInformation, initialState})} />
            </ScrollView>
        </SafeAreaView>
    )
}


export default SignUpScreen

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
    },
    text: {
        fontSize: 20
    }
});