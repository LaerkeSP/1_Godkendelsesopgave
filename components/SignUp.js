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
            <ScrollView>
                {
                    Object.keys(initialState).map((key, index) => {
                        return(
                            <View>
                                <Text style={styles.label}>{key}</Text>
                                <TextInput
                                    value = {signUpInformation[key]}
                                    onChangeText = {(event) => changeInput(key, event)}
                                    style={styles.row}
                                />
                            </View>
                        )
                    })
                }
                <Button title={ isEditsignUpInformation ? "Save changes" : "Add car"} onPress={() => handleSignUp({signUpInformation, setSignUpInformation, initialState})} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcyan',
    },
    text: {
        fontSize: 20,
    },
});