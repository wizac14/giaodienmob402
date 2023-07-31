import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Android Networking',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    location: 'Phòng T1001 - Nhà T',
    idCourse: 'MOB402',
    time: '7h30-9h30',
    date: '2023-07-23',
    nameCourse: 'Lập trình Server cho Android',
  },
];

const Item = ({ location, idCourse, time, date, nameCourse }) => (
  <View style={styles.container}>
    <Card style={styles.itemCard}>
      <Card.Content style={styles.cardView}>
        <View style={styles.view1}>
          <Card.Content style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#FF7A00' }}>
            <Text style={styles.title} variant="bodyMedium">{location}</Text>
            <Text style={styles.text} variant="bodyMedium">{idCourse}</Text>
            <Text style={styles.text} variant="bodyMedium">{time}</Text>
          </Card.Content>
        </View>

        <View style={styles.view1}>
          <Text style={styles.text} variant="bodyMedium">{date}</Text>
          <Text style={styles.text} variant="bodyMedium">{nameCourse}</Text>
        </View>
      </Card.Content>
    </Card>
  </View>
);

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item location={item.location}
          idCourse={item.idCourse}
          time={item.time}
          date={item.date}
          nameCourse={item.nameCourse} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

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
    borderWidth: 1,
    borderColor: 'green'

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
    fontSize: 16,
  },
  text: {
    fontSize: 16
  }
})