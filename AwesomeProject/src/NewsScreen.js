import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { FlatList, Linking  } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
  Image
} from 'react-native'
import { getNews } from './Heper/Service';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';





const LeftContent = props => <Avatar.Image {...props} source={require('../assets/images/fpl.png')} />


const MyComponent = (props) => {
  const images = [
    require('../assets/images/beto.jpeg'),
    require('../assets/images/beto.jpeg'),
    require('../assets/images/beto.jpeg'),
    require('../assets/images/beto.jpeg'),
    require('../assets/images/beto.jpeg'),
  ]

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const [neww, setneww] = useState([]);
  const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable>
              <Image
                source={require("../assets/images/fpt.png")}
                style={{ width: 50, height: 30, borderRadius: 100, marginLeft: 15 }}
              />
            </Pressable>
          ),
        });
      }, []);

  const ongetNews = async () => {
    const news = await getNews();
    // console.log("tin tức "+ JSON.stringify(neww.data));
    console.log("tin tức ", news);
    setneww(news);
  }
  useEffect(() => {
    ongetNews();
  }, [])
  handleClick = (url) => {
    Linking.openURL(url);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      horizontal={false}
      >
        {
          neww.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} onPress={() => handleClick(item.content)}>
              <Card key={item._id} style={{ elevation: 5, margin: 5 }}>
                <Card.Title  title="FPT Polytechnic" subtitle="" left={LeftContent} > {item.title} </Card.Title>
                <Card.Cover source={{ uri: item.img  }}
                  style={{ margin: 10 }} />
                <Card.Content>
                  <Text variant="titleLarge"> {item.title} </Text>
                  <Text style={{textAlign: 'right'}} variant="bodyMedium"> {item.date} </Text>
                </Card.Content>
              </Card>
              </TouchableWithoutFeedback>
            )
          }
          )
        }
      </ScrollView>
    </GestureHandlerRootView>
    
  )
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  card: {
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },

  normalDot: {
    height: 5,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})