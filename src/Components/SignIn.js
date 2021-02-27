//CURRENTLY NOT IN USE

import React from 'react'
import firebase from "firebase/app";
import {Button} from 'react-bootstrap'

const SignIn = () => {
    const onSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('Sign-In successful.',user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });    
    }

    const onLog = () => {
            firebase.auth().signOut().then(() => {
                console.log('Sign-out successful.')
              }).catch((error) => {
                // An error happened.
              });          
        }

    return (
        <div>
           <Button onClick={onSign}> Sign In </Button>
           <Button onClick={onLog} className="mx-2"> Log Out </Button>
        </div>
    )
}

export default SignIn
