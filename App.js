import * as React from 'react';
import { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, Button, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from '@expo/vector-icons/Ionicons'

const Profile = ({ navigation }) => {
  const [user, setUser] = useState("oguz")
  return (
    <View>
      <Text>You have to sign in ({user})</Text>
      <Button title='SignIn'
        onPress={() => {
          navigation.navigate('SignIn', { user });
        }} ></Button>
      <Button title='SignUp'
        onPress={() => {
          navigation.navigate('SignUp');
        }} ></Button>
    </View>
  )
};

const SignIn = ({ route }) => {
  return (<Text>SignIn {route.params.user}</Text>)
};

const SignUp = () => {
  return <Text>SignUp</Text>
};

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      <Stack.Screen name='SignIn' component={SignIn} options={({ route }) => ({ title: `Sign In (${route.params.user})` })}></Stack.Screen>
      <Stack.Screen name='SignUp' component={SignUp} options={{ title: "Sign Up" }}></Stack.Screen>
    </Stack.Navigator>
  )
};

const Home = () => {
  return <Text>Home</Text>
};

const Tabs = createBottomTabNavigator();

const Main = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} options={{ tabBarIcon: (props) => <Ionicons name='ios-home' {...props}></Ionicons> }}></Tabs.Screen>
      <Tabs.Screen name='ProfileStack' component={ProfileStack} options={{
        title: "Profile", headerShown: false,
        tabBarIcon: (props) => <Ionicons name='ios-person' {...props}></Ionicons>
      }}></Tabs.Screen>
    </Tabs.Navigator>
  )
};

const About = () => {
  return <Text>About</Text>
};
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Main' component={Main} />
        <Drawer.Screen name='About' component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;