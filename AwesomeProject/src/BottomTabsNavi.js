import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './SettingScreen';
import NotificationScreen from './NewsScreen';
import PlusScreen from './PlusScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleScreen from './ScheduleScreen';
import TrangChu from './TrangChu';

const Tab = createBottomTabNavigator();
const BottomTabsNavi = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 60,
        ...styles.shadow
      }
    }}
    >
      <Tab.Screen name='Home' component={TrangChu} options={{
        // tabBarActiveBackgroundColor: 'black',
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

      <Tab.Screen name='Schedule' component={ScheduleScreen} options={{
        tabBarBadge: '!',
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



      <Tab.Screen name='Plus' component={PlusScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/images/clue.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavi

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})