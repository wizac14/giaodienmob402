import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PlayMiniGame = () => {
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');

    const handleButtonPress = () => {
        // Xử lý khi người dùng nhấn vào nút ở đây
        alert(`Bạn đã nhập: ${inputText}`);
        navigation.navigate('Game',{CustomId:inputText});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nhập thông tin:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setInputText(text)}
                value={inputText}
                placeholder="Nhập vào đây"
            />
            <Button
                title="Gửi"
                onPress={handleButtonPress}
            />
        </View>
    )
}

export default PlayMiniGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
});