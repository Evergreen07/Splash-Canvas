import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import firebase from "firebase/app";
import Popup from './Popup'


const Upload = () => {
    const [pop, setPop] = useState(false);

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
            setPop(true);
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
        <form className="form">
            <div>
                <div style={{display:'flex'}}>
                    <span className="btn" onClick={onSign}><i className="fas fa-plus-square fa-2x icon"></i></span>
                    <label style={{fontSize:'20px'}}>New Splash</label>
                    {pop && <Popup setPop={setPop}/>}
                </div>
            </div>
        </form>
    );
}

export default Upload
