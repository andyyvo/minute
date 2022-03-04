import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarItem from "./src/components/TabBarItem";

// FIREBASE
// Source: https://rnfirebase.io/auth/usage
import auth from '@react-native-firebase/auth';
import {firebase} from "./src/firebase/config";

// SCREENS
import ForYou from './src/screens/ForYouScreen';
import Resources from './src/screens/ResourcesScreen';
// import Profile from './src/screens/ProfileScreen';
// import Community from './src/screens/CommunityScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  /* Firebase Anonymous sign-in
  (Once successfully signed in, any onAuthStateChanged listeners will trigger an event with the User details.)
  */
  // auth()
  // .signInAnonymously()
  // .then(() => {
  //   console.log('User signed in anonymously');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/operation-not-allowed') {
  //     console.log('Enable anonymous in your firebase console.');
  //   }

  //   console.error(error);
  // });

  /* Firebase Email/Password login
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

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Tab" options={{ headerShown: false, animationEnabled: false }}>
          {() => (<Tab.Navigator >
              <Tab.Screen name="For You" component={ForYou} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="record" text="For You"/>),
              }}/>
              <Tab.Screen name="Resources" component={Resources} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="work" text="Resources"/>),
              }}/>
              {/* <Tab.Screen name="Community" component={Community} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="users" text="Community"/>),
              }}/>
              <Tab.Screen name="Profile" component={Profile} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="user" text="Profile"/>),
              }}/> */}
          </Tab.Navigator>)}
      </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
