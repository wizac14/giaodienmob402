import { StyleSheet, Text, View, Image } from 'react-native'
import WelcomeScreen from './WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import ThongBao from './ThongBao'
import LoginScreen from './LoginScreen'
import StudyScreen from './StudyScreen'
import TestScreen from './TestScreen'
import NewsScreen from './NewsScreen'
import PlusScreen from './PlusScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrangChu from './TrangChu'
import TweetDetailScreen from './TweetDetailsScreen'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { Game } from './Game'
import Tet from './Tet'

//Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      initialRouteName='FPT Polytechnic'
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name='FPT Polytechnic' component={TrangChu} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/images/homee).png')}
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
      <Tab.Screen name='Thông báo' component={PlusScreen} options={{
        tabBarBadge: '!',
        headerTitleAlign: 'center',
        // tabBarActiveBackgroundColor: 'black',
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/images/notification.png')}
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

      <Tab.Screen name='Tin tức' component={NewsScreen} options={{
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/images/megaphone.png')}
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
      <Tab.Screen
        name='Điểm danh'
        component={ThongBao}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/schedule.png')}
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

//Stack
const HomeStack = createNativeStackNavigator();
function HomeStackGroup() {
  return (

    <HomeStack.Navigator initialRouteName='Login'>
      <HomeStack.Screen
        name='TabGroup'
        component={TabGroup}
        options={{ headerShown: false }} />
      <HomeStack.Screen
        name='TweetDetailScreen'
        component={TweetDetailScreen} />
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name='Tin tức'
        component={NewsScreen} />
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name='Lịch Học'
        component={StudyScreen} />
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name='Lịch Thi'
        component={TestScreen} />
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name='Game'
        component={Game} />
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
        name='Thẻ Sinh Viên'
        component={Tet} />

    </HomeStack.Navigator>
  )
}

const AppNavigation = () => {
  const { user } = useContext(UserContext)
  return (
    <NavigationContainer>
      {
        user ? <HomeStackGroup />
          : <LoginScreen />
      }
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})