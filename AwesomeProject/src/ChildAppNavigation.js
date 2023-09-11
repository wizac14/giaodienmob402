import { StyleSheet, Text, View, Image } from 'react-native'
import WelcomeScreen from './WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoginScreen from './LoginScreen'
import StudyScreen from './StudyScreen'
import TestScreen from './TestScreen'
import NotificationScreen from './NewsScreen'
import PlusScreen from './PlusScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrangChu from './TrangChu'
import TweetDetailScreen from './TweetDetailsScreen'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { Game } from './Game'

//Tab Bottom
export const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='MyFPL'
                screenOptions={{
                    tabBarShowLabel: false,
                }}>
                <Tab.Screen name='Tweet' component={PlusScreen} options={{
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
                <Tab.Screen name='MyFPL' component={HomeStack} options={{
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
                <Tab.Screen name='Tin tức' component={NotificationScreen} options={{
                    headerTitleAlign: 'center',
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
            </Tab.Navigator>
        </NavigationContainer>
    )
}

//Stack
const HomeStack = createNativeStackNavigator();
function HomeStackGroup() {
    return (

        <HomeStack.Navigator initialRouteName='Welcome'>
            <HomeStack.Screen
                name='News'
                component={NotificationScreen} />
            <HomeStack.Screen
                name='Study'
                component={StudyScreen} />
            <HomeStack.Screen
                name='Test'
                component={TestScreen} />
            <HomeStack.Screen
                name='Game'
                component={Game} />

        </HomeStack.Navigator>
    )
}
