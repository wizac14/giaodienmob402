import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getLTUser } from './Heper/Service';
import { UserContext } from './UserContext';

const TestScreen = (props) => {
  const [LH, setLH] = useState([]);
  const { id_user, setid_user } = useContext(UserContext);
  // const onGetLT = async () => {
  //   const LT = await getLT();
  //   console.log(LT.data);
  //   setLT(LT.data);
  // }
  const [LT, setLT] = useState([]);

  const ongetLTUser = async () => {
    // console.log('id_user',id_user);
    const L = await getLTUser(id_user);
    // console.log(LT.data);
    setLT(L.data);
  }

  renderItem = ({ item }) => {
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
              <Text variant="bodyMedium">{item.ngayThi} </Text>
              <Text variant="bodyMedium">Android Networking</Text>
              <Text variant="bodyMedium">MOB403</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    )
  }
  useEffect(() => {
    // onGetLT();
    ongetLTUser();
  }

    , [])
  return (
    <GestureHandlerRootView style={styles.container2}>
      <View style={styles.trendall}>
        <FlatList
          style={styles.container2}
          data={LT}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onRefresh={() => onGetLT()}
          refreshing={false}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>
      </View>
    </GestureHandlerRootView>
  )

}



export default TestScreen;
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
  }
})