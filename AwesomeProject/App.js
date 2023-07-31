import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

import { UserProvider } from './src/Context/userContext'
import AppNavigator from './src/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = (props) => {

  return (
    // <UserProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // </UserProvider>
  )
}

export default App

const styles = StyleSheet.create({})