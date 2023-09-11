import { StyleSheet, SafeAreaView, FlatList, Text, View, Image, TextInput, Pressable, ImageBackground, Animated, useWindowDimensions } from 'react-native'
import React, { useLayoutEffect,useContext } from 'react'
import { useNavigation } from "@react-navigation/native";
import { UserContext } from './UserContext'



const TrangChu = () => {
    const navigation = useNavigation();
    const { user,setUser } = useContext(UserContext)
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
        <SafeAreaView>
            <View style={styles.body}>
                <View style={styles.head}>
                    <Text style={styles.txtHello}>Hello,</Text>
                    <Text style={styles.txtgood}>welcome to MyFPL</Text>
                    <Image style={styles.Sun} source={require('../assets/images/Circle.png')} />
                    <View style={styles.search}>
                        <Image style={styles.imgsearch} source={require('../assets/images/Group.png')} />
                        <TextInput style={styles.txtSearch} placeholder='Tìm kiếm'></TextInput>
                    </View>
                    <Pressable style={styles.thongbao} onPress={() => setUser(null)}>
                        <Image style={styles.chuong} source={require('../assets/images/chuong.png')} />
                    </Pressable>
                    <Text style={styles.txtKham}>Khám phá ngay</Text>
                </View>
                <Pressable style={styles.btn1} onPress={() => navigation.navigate("Lịch Học")}>
                    <Image style={styles.ve} source={require('../assets/images/zyro6.png')} />
                    <Text style={styles.txtlich}>Lịch học</Text>
                    {/* <Text style={styles.khoahoc}>20 Courses</Text> */}
                </Pressable>
                <Pressable style={styles.btn2} onPress={() => navigation.navigate("Lịch Thi")}>
                    <Image style={styles.ve} source={require('../assets/images/zyro3.png')} />
                    <Text style={styles.txtlich}>Lịch thi</Text>
                    {/* <Text style={styles.khoahoc}>15 Courses</Text> */}
                </Pressable>
                <Pressable style={styles.btn3} onPress={() => navigation.navigate("Game")}>
                    <Image style={styles.ve} source={require('../assets/images/zyro4.png')} />
                    <Text style={styles.txtlich}>Game</Text>
                    {/* <Text style={styles.khoahoc}>25 tin mới</Text> */}
                </Pressable>
                <Pressable style={styles.btn4} onPress={() => navigation.navigate("Thẻ Sinh Viên")}>
                    <Image style={styles.ve} source={require('../assets/images/zyro5.png')} />
                    <Text style={styles.txtChucnang}>Thẻ sinh viên online</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default TrangChu

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 70,
    },
    body: {
        backgroundColor: '#FFF',
        shadowColor: '#52006A',
        elevation: 20,
    },
    head: {
        width: 365,
        height: 198,
        left: 14,
        top: 12,
        borderRadius: 30,
        backgroundColor: '#FF7A00',
        elevation: 20
    },
    Sun: {
        position: 'absolute',
        width: 300,
        height: 195,
        left: 5,
        bottom: 5,
    },
    txtHello: {
        width: "auto",
        height: 60,
        top: 20,
        left: 26,
        fontSize: 25,
        fontStyle: 'normal',
        letterSpacing: 0.75,
        color: "#FFF",
        fontWeight: '700',
        fontFamily: 'Roboto',
        lineHeight: 32.5,
    },
    txtgood: {
        width: 'auto',
        height: 60,
        bottom: 10,
        left: 26,
        fontSize: 22,
        fontStyle: 'normal',
        letterSpacing: 0.75,
        color: "#FFF",
        fontWeight: '600',
        fontFamily: 'Roboto',
        lineHeight: 32.5,
    },
    search: {
        width: 305,
        height: 44,
        left: 26,
        top: 5,
        borderRadius: 100,
        backgroundColor: '#FEFDFE',
        elevation: 20,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imgsearch: {
        position: 'absolute',
        width: 24,
        height: 23,
        left: 20,
        bottom: 10,
    },
    imgPolygon: {
        position: 'absolute',
        width: 11.5,
        height: 8.05,
        left: 270,
        bottom: 15,
    },
    txtSearch: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        lineHeight: 22,
        color: '#B7B7B7',
        fontWeight: '400',
        left: 55,
        width: 165,
    },
    txtAll: {
        width: 45,
        height: 45,
        bottom: 37,
        left: 235,
        fontSize: 16,
        fontStyle: 'normal',
        letterSpacing: 0.75,
        color: "#B7B7B7",
        fontWeight: '400',
        fontFamily: 'Inter',
        lineHeight: 32.5,
    },
    txtKham: {
        width: 330,
        height: 100,
        top: 15,
        left: 25,
        fontSize: 26,
        fontStyle: 'normal',
        letterSpacing: 0.5,
        color: "#000",
        fontWeight: '700',
        fontFamily: 'Roboto',
        lineHeight: 40,
    },
    thongbao: {
        width: 41,
        height: 41,
        left: 290,
        bottom: 145,
        borderRadius: 35,
        backgroundColor: '#FF7A00',
        elevation: 20,
        justifyContent: 'center',
    },
    chuong: {
        width: 24,
        height: 24,
        left: 10,
    },
    btn1: {
        width: 165,
        height: 160,
        left: 26,
        top: 95,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        justifyContent: 'center',
    },
    ve: {
        bottom: 50,
        left: 35,
        position: 'absolute',
        width: 94,
        height: 94,
    },
    txtlich: {
        width: 120,
        height: 30,
        fontSize: 18,
        letterSpacing: 0.75,
        color: "black",
        fontWeight: 'bold',
        fontFamily: 'Inter',
        lineHeight: 20,
        top: 60,
        left: 20,
        textAlign: "center"
    },
    khoahoc: {
        width: 100,
        height: 30,
        fontSize: 15,
        fontStyle: 'normal',
        letterSpacing: 0.75,
        color: "#727272",
        fontWeight: '500',
        fontFamily: 'Inter',
        lineHeight: 22.5,
        top: 48,
        left: 20,
    },
    btn2: {
        width: 165,
        height: 160,
        left: 210,
        bottom: 65,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        justifyContent: 'center',
    },
    btn3: {
        width: 165,
        height: 160,
        left: 26,
        bottom: 40,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        justifyContent: 'center',
    },
    btn4: {
        width: 165,
        height: 160,
        left: 210,
        bottom: 200,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        justifyContent: 'center',
    },
    txtChucnang: {
        width: 100,
        height: 60,
        fontSize: 18,
        fontStyle: 'normal',
        letterSpacing: 0.75,
        color: "#000000",
        fontWeight: '700',
        fontFamily: 'Inter',
        lineHeight: 20,
        top: 60,
        left: 30,
        textAlign: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginStart: 50,

    },
    viewTitle: {
        borderWidth: 1,
        borderColor: '#FF7A00',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center'

    }
})