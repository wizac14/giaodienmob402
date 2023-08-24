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
import DatePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
const StudyScreen = (props) => {
  const { id_user, setid_user } = useContext(UserContext);
  const [LH, setLH] = useState([]);
  const [today, setToday] = useState('');
  const [indate, setindate] = useState('')
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    const date = moment().format('DD/MM/YYYY');
    setToday(date);
    console.log('Today is:', date);
    ongetLHDate(id_user, date);
  }

  const handlePress2 = () => {
    // console.log('Today is:', indate);
    // ongetLHDate(id_user, indate);
    ongetLHDate(id_user, selectedDate);
    // setShowDatePicker(true); // Hiển thị date picker
  }
  const hienDatePick = () => {
    setShowDatePicker(true); // Hiển thị date picker
  }

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Hôm nay không có hoạt động</Text>
      </View>
    );
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false); // Ẩn date picker sau khi người dùng chọn ngày
    setSelectedDate(currentDate); // Lưu giá trị ngày được chọn vào state

    if (currentDate) {
      const formattedDate = moment(currentDate).format('DD/MM/YYYY');
      console.log('Ngày được chọn:', formattedDate);
      ongetLHDate(id_user, formattedDate); // Thực thi hàm ongetLHDate khi ngày đã chọn tồn tại và đã được định dạng
    }
  };
  // hàm lấy ngày


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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.getDay}>
          <Text style={styles.text}>Hôm nay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hienDatePick} style={styles.getDay}>
          <Text style={styles.text}>Chọn ngày</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DatePicker
          value={selectedDate ? new Date(selectedDate) : new Date()}
          mode="date"
          onChange={handleDateChange}
        />
      )}
      {selectedDate !== '' && (
        <Text style={styles.text2}>Ngày được chọn: {moment(selectedDate).format('DD/MM/YYYY')}</Text>
      )}


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
  getDay: {
    // width: '100%',
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    padding: 10,
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
  text2: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
  container2: {
    // width: '100%',
    // height: '100%',

    // backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
   
  },
})