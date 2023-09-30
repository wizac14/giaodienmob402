import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getCard } from './Heper/Service'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';



const Tet = () => {

  const { id_user, setid_user } = useContext(UserContext);
  const [card, setCard] = useState([]);
  const ongetCard = async () => {
    console.log('id_user', id_user);
    const L = await getCard(id_user);
    console.log("getcarrd---------------------", L.data);
    // console.log("getcarrd---------------------", L.data[0].name);
    setCard(L.data);
    // console.log("card--", card[0].name);

  }
  useEffect(() => {
    ongetCard();
    // console.log("card--", card);
  }, [])

  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };
  return (
    // <View style={styles.body}>
    //thêm để xoay màn hình
    <View style={[styles.body]}>
      <TouchableOpacity
        style={styles.rotateButton}
        onPress={handleRotate}
      >
        <Text style={styles.rotateButtonText}>Xoay</Text>
      </TouchableOpacity>

      {card.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* <Image source={{ uri: card[0].img }} style={{ width: 100, height: 100 }} />
          <Text > Tên: {card[0].name} </Text>
          <Text> Ngành học: {card[0].majors}  </Text>
          <Text> MSSV: {card[0].mssv} </Text>
          <Text> Giá trị đến : {card[0].worth_to} </Text>
           <Image source={{ uri: card[0].img }} style={{ width: 200, height: 200, borderRadius: 100 }} /> */}

          <View style={[styles.container, isRotated && styles.rotatedContainer]}>
            <View style={styles.header}>
              <Image resizeMode='contain' style={[styles.avt]} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png?20200416064027' }} />
              <View style={styles.title1}>
                <Text style={styles.school}>Trường Cao Đẳng FPT Polytechnic</Text>
                <View style={styles.contTitle}><Text style={styles.title}>THẺ SINH VIÊN</Text></View>
              </View>
            </View>
            <View style={styles.main}>
              <Image resizeMode='contain' style={[styles.avt, isRotated && styles.avt2]} source={{ uri: card[0].img }} />
              <View style={styles.info}>
                <View style={styles.contname}>
                <Text style={[styles.text, isRotated && styles.rotatedText]}>Họ và tên/Name </Text>
                  <Text style={[styles.name, isRotated && styles.rotatedText]}>{card[0].name}</Text>
                </View>
                <View style={styles.contMajor} >
                  <Text style={[styles.major, isRotated && styles.rotatedText]}>{card[0].majors}</Text>
                </View>
                <View style={styles.contMssv}>
                  <Text style={[styles.text, isRotated && styles.rotatedText]}>MSSV/Student ID </Text>
                  <Text style={[styles.mssv, isRotated && styles.rotatedText]}>{card[0].mssv}</Text>
                </View>
                <View style={styles.contWorth}>
                  <View >
                  <Text style={[styles.text, isRotated && styles.rotatedText]}>Giá trị đến/Valid to </Text>
                    <Text style={[styles.worth, isRotated && styles.rotatedText]}>{card[0].worth_to}</Text>
                    <View style={styles.contCao}>
                      <Text style={[styles.caodang, isRotated && styles.caodang2]}>
                        caodang.fpt.edu.vn
                      </Text>
                    </View>
                  </View>
                  <Image resizeMode='contain' style={styles.ong} source={{ uri: 'https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n.png' }} />
                </View>

              </View>


            </View>
          </View>
        </>
      )}
    </View>
  )
}
export default Tet
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    // transform: [{ rotateZ: '90deg' }]
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 20,
    padding: 10,
    // margin: 10,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    // padding: 10,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: 'gray',
    // borderWidth: 1,

  },
  img: {
    width: 100,
  },
  school: {
    fontSize: 8,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  title1: {
    width: '70%',
    height: 'auto',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  contTitle: {
    backgroundColor: 'orange',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 10,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  avt: {
    height: 110,
    width: 100,
    
  },
  main: {
    width: '100%',
    flexDirection: 'row',

  },
  text: {
    fontSize: 7,
    fontWeight: 'bold',
    color: 'gray',
  },
  info: {
    width: '70%',

    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 10,
  },
  name: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  major: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  mssv: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  worth: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  caodang: {
    fontSize: 6,
    fontWeight: 'bold',
    color: 'white',
  },
  contCao: {
    backgroundColor: 'blue',
    width: '80%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',

  },
  ong: {
    width: 100,
    height: 100,
    marginLeft: 5,
  },
  contWorth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contMajor: {
    width: '70%',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  rotateButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  rotateButtonText: {
    color: 'white',
  },
  rotatedContainer: {
    transform: [{ rotateZ: '90deg' }],
  },
  rotatedContainer: {
    width: '124%',  // Kích thước chiều rộng mới khi xoay
    height: 300,
    transform: [{ rotate: '90deg' }],
    fontSize: 20,// Kích thước chiều cao mới khi xoay
    padding: 10,
    margin: 10,
  },
  rotatedText: {
    fontSize: 10,
    paddingVertical: 1// Kích thước font chữ mới
  },
  caodang2: {
    width: 200,
    fontSize: 6,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  avt2: {
    width: 120,
  },
  school2: {
    fontSize: 8,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'black',
  },
})