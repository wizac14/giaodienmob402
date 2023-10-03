import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { getGame, getPlayed, LayDiem, getGame2, getPlayedGames } from './Heper/Service'
import { UserContext } from './UserContext'
import { useNavigation } from '@react-navigation/native';

export const Game = ({ route }) => {
    console.log("route", route.params.CustomId);
    const navigation = useNavigation();
    //Giá trị id_user bạn muốn lọc
    const { user, id_user } = useContext(UserContext)
    const [thongBao, setthongBao] = useState(false);
    const [listgame, setlistgame] = useState([]);
    const [game_id, setgame_id] = useState(null);
    const [_data, set_data] = useState(null);

    const OnGetGame = async () => {
        const res = await getGame2(String(route.params.CustomId));
        const data = res.game;
        setgame_id(res._id);
        // lay du lieu nguoi da choi
        const resplay = await getPlayedGames(res._id);
        // set_data(resplay);
        // console.log("_data", _data);
        // console.log("resplay", resplay);
        var targetIdUser = id_user;
        const filteredData = resplay.filter(item => item.id_user === targetIdUser);
        // console.log("filteredData", filteredData);
        if (filteredData.length > 0) {
            setthongBao(true);
            console.log("Sinh viên này đã tham gia");

        } else {
            setlistgame(data)
            console.log("Sinh viên này chưa tham gia");
        }
    }
    const OnLayDiem = async (id_user, game_id, diem) => {
        const res = await LayDiem(id_user, game_id, diem);
        navigation.navigate('TabGroup');
        console.log("Lấy điểm thành công", res);
    }
    useEffect(() => {
        OnGetGame();
    }, [])
    const gameData = listgame;
    // console.log("data", gameData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = gameData[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.dapan) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < gameData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        // setCurrentQuestionIndex(0);
        // setScore(0);
        // setShowResult(false);

    };
    // THỐNG KÊ TOP 3 NGƯỜI CHƠI
    // const groupedData = _data.reduce((acc, item) => {
    //     const id_user = item.id_user;
    //     const diem = parseInt(item.diem); // Chuyển đổi điểm thành số nguyên

    //     if (!acc[id_user]) {
    //         acc[id_user] = {
    //             id_user,
    //             totalDiem: diem,
    //         };
    //     } else {
    //         acc[id_user].totalDiem += diem;
    //     }

    //     return acc;
    // }, {});
    // const leaderboard = Object.values(groupedData);
    // // Sắp xếp bảng xếp hạng theo điểm giảm dần
    // leaderboard.sort((a, b) => b.totalDiem - a.totalDiem);
    // //Chọn 3 người có điểm cao nhất
    // const top3Players = leaderboard.slice(0, 3);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const renderQuestion = () => {
        if (showResult) {
            return (
                <View style={styles.container}>
                    {/* <Text style={styles.resultText}>Kết quả: {score}/{gameData.length}</Text> */}
                    <Button title="Lấy điểm" onPress={() => OnLayDiem(id_user, game_id, score)} />
                </View>
            );
        }
        if (thongBao) {
            return (
                <View style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: 'center',
                }} >
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Kết quả của bạn đã được lưu 🐝</Text>
                    {/* <Text>Bảng xếp hạng 3 người có điểm cao nhất:</Text> */}
                    {/* <FlatList
                        data={top3Players}
                        keyExtractor={(item) => item.id_user}
                        renderItem={({ item, index }) => (
                            <View>
                                <Text>Người chơi #{index + 1}</Text>
                                <Text>ID: {item.id_user}</Text>
                                <Text>Điểm: {item.totalDiem}</Text>
                            </View>
                        )}
                    /> */}
                </View>
            );
        }

        if (currentQuestionIndex >= gameData.length) {
            return null; // Kết thúc trò chơi
        }

        const currentQuestion = gameData[currentQuestionIndex];

        return (
            <View style={styles.container}>
                <Text style={styles.questionText}>{currentQuestion.cauhoi}</Text>
                <TouchableOpacity style={[styles.btn1, { backgroundColor: "#FBE264" }]} onPress={() => handleAnswer('a')}>
                    <Text style={styles.txt1}>{currentQuestion.a}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn1, { backgroundColor: "#F79569" }]} onPress={() => handleAnswer('b')}>
                    <Text style={styles.txt1}>{currentQuestion.b}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn1, { backgroundColor: "#45BB7A" }]} onPress={() => handleAnswer('c')}>
                    <Text style={styles.txt1}>{currentQuestion.c}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn1, { backgroundColor: "#37C6F5" }]} onPress={() => handleAnswer('d')}>
                    <Text style={styles.txt1}>{currentQuestion.d}</Text>
                </TouchableOpacity>
                {/* <Button title={currentQuestion.a} onPress={() => handleAnswer('a')} />
                <Button title={currentQuestion.b} onPress={() => handleAnswer('b')} />
                <Button title={currentQuestion.c} onPress={() => handleAnswer('c')} />
                <Button title={currentQuestion.d} onPress={() => handleAnswer('d')} /> */}
            </View>
        );
    };

    return renderQuestion();
};

const styles = StyleSheet.create({
    txt1: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    btn1: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        // backgroundColor: '#FF7A00',
        marginBottom: 10,
        width: '90%',
        height: 70,
    },
    container: {
        padding: 10,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        padding: 10,
        fontFamily: 'Roboto',
        // backgroundColor: '#B6DCCF',
        width: '100%',
        height: 150,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#FF7A00',
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Game;