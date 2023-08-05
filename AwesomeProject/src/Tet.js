import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { getCard } from './Heper/Service'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';



const Tet = () => {

  const { id_user, setid_user } = useContext(UserContext);
  const [card, setCard] = useState([]);
  const ongetCard = async () => {
    console.log('id_user', id_user);
    const L = await getCard(id_user);
    console.log("getcarrd---------------------", L.data);
    // console.log("getcarrd---------------------", L.data[0].name);
    setCard(L.data);
    // console.log("card--", card[0].name);

  }
  useEffect(() => {
    ongetCard();
    // console.log("card--", card);
  }, [])

  // const renderItem = ({ item }) => {
  //   return (
  //     <View>

  //     </View>
  //   );
  // }
  return (
    <View style={styles.body}>
      {/* <Image source={{ uri: card[0].img }} style={{ width: 100, height: 100 }} />
        <Text > Tên: {card[0].name} </Text>
        <Text> Ngành học: {card[0].majors}  </Text>
        <Text> MSSV: {card[0].mssv} </Text>
        <Text> Giá trị đến : {card[0].worth_to} </Text> */}
      {card.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Image source={{ uri: card[0].img }} style={{ width: 100, height: 100 }} />
          <Text > Tên: {card[0].name} </Text>
          <Text> Ngành học: {card[0].majors}  </Text>
          <Text> MSSV: {card[0].mssv} </Text>
          <Text> Giá trị đến : {card[0].worth_to} </Text>
        </>
      )}

    </View>
  )
}

export default Tet

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },


})