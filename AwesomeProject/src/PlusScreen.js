import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View, TouchableOpacity,Linking
} from "react-native";
import { Avatar } from 'react-native-paper';


import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { getTinTucapi } from "./Heper/Service";
import { useState, useEffect, useContext } from "react";


export default function PlusScreen() {

  const navigation = useNavigation();
  const [tintuc, setTinTuc] = useState([]);

  const ongetTinTucap = async () => {
    const L = await getTinTucapi();
    console.log("getTinTucapi---------------------", L.data);
    setTinTuc(L.data);
  };
  useEffect(() => {
    ongetTinTucap();
  }, []);
  handleClick = (url) => {
    Linking.openURL(url);
  }
   
  const renderItem = ({ item }) => {
    return (
      console.log("item", item.link),
      <TouchableOpacity onPress={() => handleClick(item.link) }>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      </TouchableOpacity>
    )
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../assets/images/fpt.png")}
            style={{ width: 50, height: 30, borderRadius: 100, marginLeft: 15 }}
          />
        </Pressable>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        // data={tweets.slice(0, 30)}
        // keyExtractor={(item) => {
        //   return item.id;
        // }}
        // renderItem={({ item }) => {
        //   return <Tweet tweet={item} />;
        // }}
        // // ListHeaderComponent={() => (
        // //   <View style={styles.header}>
        // //     <Text style={styles.headerTitle}>New tweets available</Text>
        // //   </View>
        // // )}
        // ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        // ItemSeparatorComponent={() => <View style={styles.divider} />}
        data={tintuc}
        keyExtractor={(item) => {
          return item._id;
        }}
        renderItem={renderItem}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    // textAlign: "center",
    margin: 10,
    fontWeight: 'bold',
    color: 'black'
  },

});