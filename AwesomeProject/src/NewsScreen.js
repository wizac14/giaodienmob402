import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { FlatList } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { Avatar, Button, Card, Text  } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native'
import { getNews } from './Heper/Service';
// import { FlatList } from 'react-native-gesture-handler';


const images = new Array(6).fill(
  'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926',
);


const LeftContent = props => <Avatar.Image {...props} source={require('../assets/images/fpl.png')} />



const MyComponent = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

 const [neww, setneww] = useState([]);

  const ongetNews = async () => {
    const news = await getNews();
    // console.log("tin tức "+ JSON.stringify(neww.data));
    console.log("tin tức ", news);
    setneww(news);
  }
  useEffect(() => {
    ongetNews();
  }, [])
 const batloi =() => {
  console.log("bat loi")
 }
  const DATA = [
    {
      _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Item 1',
      content: 'First Item',
      date: '2021-08-01'
    }]
  renderItems = ({ item }) => {
    <Text> {item.title} </Text>
   {batloi}
  //   <Card style={{ elevation: 5, margin: 5 }}>
  //   <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} > {item.title} </Card.Title>
  //   <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
  //     style={{ margin: 10 }} />
  //   <Card.Content>
  //     <Text variant="titleLarge"> {item.content} </Text>
  //     <Text variant="bodyMedium"> {item.date} </Text>
  //   </Card.Content>
  // </Card> 
  }

  return (
    <GestureHandlerRootView style={styles.container}>

    <FlatList 
        data={DATA}
        renderItem={renderItems}
        keyExtractor={(item) => item._id}
        refreshing={false}
        showsVerticalScrollIndicator={false}
        
        >
  

        </FlatList>

        {
          
        }
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