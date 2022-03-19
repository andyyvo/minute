import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


// FIREBASE
 /* Firebase Email/Password login
 OR use Google sign in?
  (createUserWithEmailAndPassword performs two operations; first creating the user if they do not already exist, and then signing them in.)
  */
  // auth()
  // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });

  /* Firebase persistent login */
  // Use Firebase auth state persistence:
  // https://firebase.google.com/docs/auth/web/auth-state-persistence
  
  // const [loading, setLoading] = useState("");
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           setLoading(false)
  //           setUser(userData)
  //         })
  //         .catch((error) => {
  //           setLoading(false)
  //         });
  //     } else {
  //       setLoading(false)
  //     }
  //   });
  // }, []);

  /* Firebase signOut */
  // auth()
  // .signOut()
  // .then(() => console.log('User signed out!'));


export default function ProfileScreen() {
    return (
        <View>
            <Text>User Profile Here</Text>
        </View>
    )
}