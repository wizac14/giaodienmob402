import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import { getGame } from './Heper/Service'
const GameTest = () => {
    const [listgame, setlistgame] = useState([]);
    const OnGetGame = async () => {
        const res = await getGame();
        const data = res[0].game;
        console.log("data", data);
        console.log("res", res);
    }
  return (
    <View>
      <Button title="get game" onPress={OnGetGame}/>
    </View>
  )
}

export default GameTest

const styles = StyleSheet.create({})