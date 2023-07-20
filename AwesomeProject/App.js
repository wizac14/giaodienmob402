import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './src/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from './src/LoginScreen'
import BottomTabsNavi from './src/BottomTabsNavi'
import {
  HomeOutlined,
} from '@ant-design/icons';
import ScheduleScreen from './src/ScheduleScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{title: "Welcome Inoshishi", headerShown: false,}}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{title: "Login", headerShown: false}}
        />
        <Stack.Screen
        name='BottomTab'
        component={BottomTabsNavi}
        options={{title: "BottomTab", headerShown: false}}
        />
        <Stack.Screen
        name='TopBar'
        component={ScheduleScreen}
        options={{title: "TopBar", headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})