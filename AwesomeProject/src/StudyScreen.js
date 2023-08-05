import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserContext } from './UserContext';
import { getLHUser } from './Heper/Service';
import { getLHDate } from './Heper/Service';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
const StudyScreen = (props) => {
  const { id_user, setid_user } = useContext(UserContext);
  const [LH, setLH] = useState([]);
  const [today, setToday] = useState('');
  const ongetLHUser = async () => {
    // console.log('id_user',id_user);
    const L = await getLHUser(id_user);
    // console.log(LH.data);
    setLH(L.data);
  }

 const ongetLHDate = async (id_user, date) => {

    const L = await getLHDate(id_user, date);
    // console.log(LH.data);
    setLH(L.data);
  }


  const handlePress = () => {
    const date = moment().format('MM/DD/YYYY');
    setToday(date);
    console.log('Today is:', date);
    ongetLHDate(id_user ,date);
  }



  rederItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card style={styles.itemCard}>
          <Card.Content style={styles.cardView}>
            <View style={styles.view1}>
              <Card.Content style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#FF7A00', padding: 10 }}>
                <Text style={styles.title} variant="bodyMedium"> {item.ca} </Text>
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
      
          <TouchableOpacity onPress={handlePress} style={styles.getDay}>
            <Text style={styles.textToday}>Get Today's Date</Text>
          </TouchableOpacity>
        
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

  container2: {
    
      width: '100%',
      height: '100%',
  },

  getDay: {
    alignContent: 'center',
    backgroundColor: '#FF7A00',
    borderWidth: 1,
    borderRadius: 15,
  },

  textToday: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Popins',
    fontWeight: 'bold'
  },

  cardView: {
    margin: 5,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',

  },

  itemCard: {
    backgroundColor: '#ECECEC'
    
  },

  view1: {
    flex: 1,
    margin: 10,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
})
