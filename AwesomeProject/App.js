import { StyleSheet, Text, View, Image } from 'react-native'
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


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='TabGroup'
        component={TabGroup}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name='TweetDetailScreen'
        component={TweetDetailScreen} />
      <HomeStack.Screen
        name='News'
        component={NotificationScreen} />
      <HomeStack.Screen
        name='Study'
        component={StudyScreen} />
      <HomeStack.Screen
        name='Test'
        component={TestScreen} />
    </HomeStack.Navigator>
  )
}

function TabGroup() {
  return (
    <Tab.Navigator
      initialRouteName='MyFPL'
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name='Tweet' component={PlusScreen} options={{
        tabBarBadge: '!',
        // tabBarActiveBackgroundColor: 'black',
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('./assets/images/notification.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        )
      }} />
      <Tab.Screen name='MyFPL' component={TrangChu} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('./assets/images/homee).png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        )
      }} />
      <Tab.Screen name='Tin tức' component={NotificationScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('./assets/images/notification.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}



const App = () => {
  return (
    // <NavigationContainer >
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name='Welcome'
    //       component={WelcomeScreen}
    //       options={{title: "Welcome Inoshishi", headerShown: false,}}
    //     />
    //     <Stack.Screen
    //       name='LoginScreen'
    //       component={LoginScreen}
    //       options={{title: "Login", headerShown: false}}
    //     />
    //     <Stack.Screen
    //     name='BottomTab'
    //     component={BottomTabsNavi}
    //     options={{title: "BottomTab", headerShown: false}}
    //     />
    //     <Stack.Screen
    //     name='TopBar'
    //     component={ScheduleScreen}
    //     options={{title: "TopBar", headerShown: false}}
    //     />
    //     <Stack.Screen 
    //     name='Study'
    //     component={StudyScreen}
    //     options={{title: "Lịch học", headerShown: true}}
    //     />
    //     <Stack.Screen 
    //     name='Test'
    //     component={TestScreen}
    //     options={{title: "Lịch thi", headerShown: true}}
    //     />
    //     <Stack.Screen 
    //     name='Notifi'
    //     component={NotificationScreen}
    //     options={{title: "Tin tức", headerShown: true}}
    //     />

    //     <Stack.Screen 
    //     name='Plus'
    //     component={PlusScreen}
    //     options={{title: "Chức năng mở rộng", headerShown: true}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>



    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})