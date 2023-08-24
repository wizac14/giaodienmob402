import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getLTUser } from './Heper/Service';
import { UserContext } from './UserContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { getLTDate } from './Heper/Service';
import DatePicker from '@react-native-community/datetimepicker';

const TestScreen = (props) => {
  const [LH, setLH] = useState([]);
  const { id_user, setid_user } = useContext(UserContext);

  // const onGetLT = async () => {
  //   const LT = await getLT();
  //   console.log(LT.data);
  //   setLT(LT.data);
  // }
  const [LT, setLT] = useState([]);
  const [today, setToday] = useState('');
  const [indate, setindate] = useState('')
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);


  const ongetLTUser = async () => {
    // console.log('id_user',id_user);
    const L = await getLTUser(id_user);
    // console.log(LT.data);
    setLT(L.data);
  }
  const ongetLTDate = async (id_user, date) => {
    const L = await getLTDate(id_user, date);
    // console.log(LH.data);
    setLT(L.data);
  }

  const handlePress = () => {
    const date = moment().format('MM/DD/YYYY');
    setToday(date);
    console.log('Today is:', date);
    ongetLTDate(id_user, date);
  }
  const handlePress2 = () => {
    // console.log('Today is:', indate);
    // ongetLTDate(id_user, indate);
    ongetLTDate(id_user, selectedDate);
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false); // Ẩn date picker sau khi người dùng chọn ngày
    setSelectedDate(currentDate); // Lưu giá trị ngày được chọn vào state

    if (currentDate) {
      const formattedDate = moment(currentDate).format('DD/MM/YYYY');
      console.log('Ngày được chọn:', formattedDate);
      ongetLTDate(id_user, formattedDate); // Thực thi hàm ongetLHDate khi ngày đã chọn tồn tại và đã được định dạng
    }
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Hôm nay không có hoạt động</Text>
      </View>
    );
  };
  //.....
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

  const hienDatePick = () => {
    setShowDatePicker(true); // Hiển thị date picker
  }
  useEffect(() => {
    // onGetLT();
    ongetLTUser();
  }

    , [])
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

          data={LT}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onRefresh={() => onGetLT()}
          refreshing={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent} // Thêm ListEmptyComponent vào FlatList
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
  text2: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
  textinput: {
    backgroundColor: 'white',

    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
})