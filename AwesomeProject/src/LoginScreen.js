import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonStart}
        onPress={() => navigation.navigate("BottomTab")}
      >
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },

  buttonStart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
    width: 120,
    height: 50,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#FF7A00',
  },

  textButton: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})