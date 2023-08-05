import * as React from 'react';
import { Card, Button, ProgressBar, MD3Colors, Avatar, Text } from 'react-native-paper';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserContext } from './UserContext';
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getLHUser } from './Heper/Service';


const ThongBao = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable>
              <Image
                source={require("../assets/images/fpt.png")}
                style={{ width: 50, height: 30, borderRadius: 100, marginLeft: 15, padding: 10 }}
              />
            </Pressable>
          ),
        });
      }, []);
      
  const id_user = "64b7aaa1c792d40deef11a44"
    const [LH, setLH] = useState([]);
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
                            <Card.Content style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#FF7A00', padding: 10 }}>
                                <Text variant="bodyMedium"> {item.ca} </Text>
                                <Text style={{fontWeight: 'bold'}} variant="bodyMedium"> 
                                {item.status == false ? 'Chưa điểm danh' : 'Đã điểm danh'} 
                                </Text>
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
}

export default ThongBao

const styles = StyleSheet.create({
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