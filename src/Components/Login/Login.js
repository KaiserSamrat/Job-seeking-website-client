import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth"; 
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
            localStorage.setItem('user', JSON.stringify(loggedInUser));
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }
    return (
        <div>
            <div className="container">
               <div className="text-center">
               <button className='btn btn-success m-5'  onClick={handleGoogleSignIn} >Sign in With google</button>
               </div>
               <p></p>
            </div>
        </div>
    );
};

export default Login;