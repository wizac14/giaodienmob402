import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from 'react-navigation'
import StudyScreen from './StudyScreen';
import TestScreen from './TestScreen';
import NotificaTionSceen from './NewsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();


const ScheduleScreen = () => {
    return (
        
        <Tab.Navigator
            initialRouteName="Study"
            screenOptions={{
                tabBarActiveTintColor: "black",
                tabBarLabelStyle: { fontSize: 14, color: '#FF7A00' },
                tabBarStyle: { backgroundColor: 'white' },
                tabBarPressColor: "grey",
            }}
        >
            <Tab.Screen
                name='Study'
                component={StudyScreen}
                options={{ tabBarLabel: "LỊCH HỌC" }}
            />
            <Tab.Screen
                name='Test'
                component={TestScreen}
                options={{ tabBarLabel: "LỊCH THI" }}
            />
            <Tab.Screen
                name='Notify'
                component={NotificaTionSceen}
                options={{ tabBarLabel: "THÔNG BÁO" }}
            />

        </Tab.Navigator>

        
        
    )
}

export default ScheduleScreen

const styles = StyleSheet.create({})