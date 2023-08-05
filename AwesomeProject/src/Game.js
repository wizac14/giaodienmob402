import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getGame, getPlayed, LayDiem } from './Heper/Service'
import { UserContext } from './UserContext'
import { useNavigation } from '@react-navigation/native';

export const Game = () => {
    const navigation = useNavigation();
    //Giá trị id_user bạn muốn lọc
    const { user, id_user } = useContext(UserContext)
    const [thongBao, setthongBao] = useState(false);
    const [listgame, setlistgame] = useState([]);
    let game_id = "64cd01d4b0eba2045e9b543e";
    const thongBaoDaChoi = () => {
        <Text style={{}}>Kết quả của bạn đã được lưu</Text>
    }
    const OnGetGame = async () => {
        // lay du lieu nguoi da choi
        const resplay = await getPlayed();
        var targetIdUser = id_user;
        const filteredData = resplay.filter(item => item.id_user === targetIdUser);
        console.log("filteredData", filteredData);
        if (filteredData.length > 0) {
            setthongBao(true);
            console.log("Sinh viên này đã tham gia");

        } else {
            // lay du lieu tro choi
            const res = await getGame();
            const data = res[0].game;
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

    const renderQuestion = () => {
        if (showResult) {
            return (
                <View style={styles.container}>
                    <Text style={styles.resultText}>Kết quả: {score}/{gameData.length}</Text>
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
                <Button title={currentQuestion.a} onPress={() => handleAnswer('a')} />
                <Button title={currentQuestion.b} onPress={() => handleAnswer('b')} />
                <Button title={currentQuestion.c} onPress={() => handleAnswer('c')} />
                <Button title={currentQuestion.d} onPress={() => handleAnswer('d')} />
            </View>
        );
    };

    return renderQuestion();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        marginBottom: 20,
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Game;