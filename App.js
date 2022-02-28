import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarItem from "./src/components/TabBarItem";

// SCREENS
import Record from './src/screens/RecordScreen';
import Profile from './src/screens/ProfileScreen';
import Resources from './src/screens/ResourcesScreen';
import Community from './src/screens/CommunityScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Tab" options={{ headerShown: false, animationEnabled: false }}>
          {() => (<Tab.Navigator >
              <Tab.Screen name="Record" component={Record} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="record" text="Record"/>),
              }}/>
              <Tab.Screen name="Resources" component={Resources} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="work" text="Resources"/>),
              }}/>
              <Tab.Screen name="Community" component={Community} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="users" text="Community"/>),
              }}/>
              <Tab.Screen name="Profile" component={Profile} options={{
                TabBarItem: ({ focused }) => (<TabBarItem focused={focused} iconName="user" text="Profile"/>),
              }}/>
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
