import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import WelcomeScreen from './src/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from './src/LoginScreen'
import BottomTabsNavi from './src/BottomTabsNavi'
import ScheduleScreen from './src/ScheduleScreen'
import StudyScreen from './src/StudyScreen'
import TestScreen from './src/TestScreen'
import NotificationScreen from './src/NewsScreen'
import PlusScreen from './src/PlusScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrangChu from './src/TrangChu'
import SettingScreen from './src/SettingScreen'
import TweetDetailScreen from './src/TweetDetailsScreen'
import Icon from 'react-native-ionicons'
import Tet from './src/Tet'
import { UserProvider } from './src/UserContext'
import AppNavigation from './src/AppNavigation'
import ThongBao from './src/ThongBao'
import { Game } from './src/Game'
import GameTest from './src/GameTest'
const App = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //     <ThongBao/>
    // </SafeAreaView>

    <UserProvider>
      <AppNavigation/>
    </UserProvider>
  )
}

export default App

const styles = StyleSheet.create({})