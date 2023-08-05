import * as React from 'react';
import { Card, TextInput, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
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
  const [indate, setindate] = useState('')
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
    ongetLHDate(id_user, date);
  }

  const handlePress2 = () => {
    console.log('Today is:', indate);
    ongetLHDate(id_user, indate);
  }
  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Hôm nay không có hoạt động</Text>
      </View>
    );
  };

  rederItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card style={styles.itemCard}>
          <Card.Content style={styles.cardView}>
            <View style={styles.view1}>
              <Card.Content style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#FF7A00', padding: 10 }}>
                <Text variant="bodyMedium"> {item.ca} </Text>
                <Text variant="bodyMedium"> {item.diaDiem} </Text>
                {/* <Text variant="bodyMedium"> </Text> */}
              </Card.Content>
            </View>
            <View style={styles.view1}>
              <Text style={{fontWeight: 'bold'}} variant="bodyMedium">{item.ngayHoc} </Text>
              <Text style={{fontWeight: 'bold'}} variant="bodyMedium">Android Networking</Text>
              <Text style={{fontWeight: 'bold'}} variant="bodyMedium">MOB403</Text>
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
        <Text style={styles.text}>Lấy lịch học của ngày hôm nay</Text>
      </TouchableOpacity>
      <TextInput style={styles.textinput}
        placeholder='Nhập ngày cần tìm MM/DD/YYYY'
        onChangeText={setindate}
        onEndEditing={handlePress2}
      >
      </TextInput>
      <View style={styles.trendall}>
        <FlatList
          style={styles.container2}
          data={LH}
          renderItem={rederItem}
          keyExtractor={item => item._id}
          onRefresh={() => ongetLH()}
          refreshing={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent} // Thêm ListEmptyComponent vào FlatList
        >
        </FlatList>
      </View>
    </GestureHandlerRootView>
  )
};

export default StudyScreen;
const styles = StyleSheet.create({
  container2: {
    width: '100%',
    height: '100%',
  },
  getDay: {
    backgroundColor: '#FF7A00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  textinput: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,

  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  emptyText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: '#FF7A00'
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
    fontSize: 16
  },

})