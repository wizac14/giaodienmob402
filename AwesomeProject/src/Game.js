import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getGame,getPlayed } from './Heper/Service'

// const gameData = [
//     {
//         cauhoi: '1+1=?',
//         a: '2',
//         b: '3',
//         c: '4',
//         d: '5',
//         dapan: 'a',
//     },
//     {
//         cauhoi: '2+2=?',
//         a: '3',
//         b: '4',
//         c: '5',
//         d: '6',
//         dapan: 'b',
//     },
//     // Thêm câu hỏi khác ở đây
// ];

export const Game = () => {
    const id_user = "64b7aaa1c792d40deef11a44"; 
    const [listgame, setlistgame] = useState([]);
    const OnGetGame = async () => {
        const res = await getGame();
        const resplay = await getPlayed();
        const data = res[0].game;
        const data2 = resplay[0]._id;
        // const data2 = data[0].a;
        setlistgame(data)
        // console.log("data", data);
        console.log("res", res);
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
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
    };

    const renderQuestion = () => {
        if (showResult) {
            return (
                <View style={styles.container}>
                    <Text style={styles.resultText}>Kết quả: {score}/{gameData.length}</Text>
                    <Button title="Chơi lại" onPress={handleRestart} />
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