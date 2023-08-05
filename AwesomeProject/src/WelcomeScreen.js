import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, {useRef, useEffect} from 'react'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image style={styles.imghome1}
          source={require('../assets/images/zyro-image.png')}
        />
        <Image style={styles.imghome2}
          source={require('../assets/images/h22.png')}
        />
      </View>
      <View style={styles.viewImg}>
        <Image style={styles.imghome3}
          source={require('../assets/images/h33.png')}
        />
        <Image style={styles.imghome4}
          source={require('../assets/images/hinh4.png')}
        />
      </View>
      <Text style={styles.WelcomeText}>
        Hãy cùng nhau khám phá {"\n"}ứng dụng học tập
        <Text style={styles.FPLText}> My FPL</Text>
      </Text>

      <Pressable style={styles.buttonStart}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textButton}>Start</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonStart: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#FF7A00',
    marginTop: 20,
  },

  textButton: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  WelcomeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 30,
  },
  FPLText: {
    color: '#FF7A00',
  },

  imghome1: {
    marginLeft: 10,
    marginTop: 10,
    width: 180,
    height: 300,
    borderRadius: 30,
  },

  imghome2: {
    marginLeft: 15,
    marginTop: 50,
    width: 180,
    height: 300,
    borderRadius: 30,
  },

  imghome3: {
    marginLeft: 10,
    marginTop: -20,
    width: 180,
    height: 300,
    borderRadius: 60,
  },

  imghome4: {
    marginLeft: 10,
    marginTop: 40,
    width: 180,
    height: 250,
    borderRadius: 40,
  },

  viewImg: {
    flexDirection: 'row',
  },


})