import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserContext } from './UserContext';
import { getLHUser } from './Heper/Service';
const StudyScreen = (props) => {
  const { id_user, setid_user } = useContext(UserContext);
  
  // const id_user = "64b7aaa1c792d40deef11a44"
  const [LH, setLH] = useState([]);

  // const ongetLH = async () => {
  //   // console.log('id_user',id_user);
  //   const LH = await getLH();
  //   console.log(LH.data);
  //   setLH(LH.data);
  // }
  const ongetLHUser = async () => {
    // console.log('id_user',id_user);
    const L = await getLHUser(id_user);
    // console.log(LH.data);
    setLH(L.data);
  }
  


  rederItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card style={styles.itemCard}>
          <Card.Content style={styles.cardView}>
            <View style={styles.view1}>
              <Card.Content style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#FF7A00' }}>
                <Text variant="bodyMedium"> {item.ca} </Text>
                <Text variant="bodyMedium"> {item.diaDiem} </Text>
                {/* <Text variant="bodyMedium"> </Text> */}
              </Card.Content>
            </View>
            <View style={styles.view1}>
              <Text variant="bodyMedium">{item.ngayHoc} </Text>
              <Text variant="bodyMedium">Android Networking</Text>
              <Text variant="bodyMedium">MOB403</Text>
            </View>
          </Card.Content>
        </Card>
      </View>


    )
  }
  useEffect(() => {
    // ongetLH();
    ongetLHUser();
  }, [])

  return (
    <GestureHandlerRootView style={styles.container2}>
      <View style={styles.trendall}>
        <FlatList
          style={styles.container2}
          data={LH}
          renderItem={rederItem}
          keyExtractor={item => item._id}
          onRefresh={() => ongetLH()}
          refreshing={false}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>
      </View>
    </GestureHandlerRootView>
  )
};

export default StudyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  cardView: {
    margin: 5,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'white',

  },

  itemCard: {
    backgroundColor: '#ECECEC'
  },

  view1: {
    flex: 1,
    margin: 10,
  },
  container2: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'yellow',
  },
})