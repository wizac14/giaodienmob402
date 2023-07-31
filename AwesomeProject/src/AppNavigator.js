import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from './LoginScreen'
import BottomTabsNavi from './BottomTabsNavi'
import ScheduleScreen from './ScheduleScreen'
import { UserProvider } from './src/Context/userContext'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ title: "Welcome Inoshishi", headerShown: false, }}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name='BottomTab'
        component={BottomTabsNavi}
        options={{ title: "BottomTab", headerShown: false }}
      />
      <Stack.Screen
        name='TopBar'
        component={ScheduleScreen}
        options={{ title: "TopBar", headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator