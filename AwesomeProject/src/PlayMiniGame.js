import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
const PlayMiniGame = () => {
    //khai báo biến QR
    const [data, setData] = useState('');
    const [showQRScanner, setShowQRScanner] = useState(false); // Biến state để điều khiển hiển thị quét QR
    const handleQRRead = ({ data }) => {
        setData(data);
        setShowQRScanner(false); // Ẩn quét QR sau khi quét thành công
    };

    const handleQRScannerClose = () => {
        setShowQRScanner(false); // Đóng quét QR khi nút được kích hoạt
    };
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const QRCode = () => {
        return (
            <View style={styles.qrScannerContainer}>
                <QRCodeScanner
                    onRead={handleQRRead}
                    reactivate={true}
                    reactivateTimeout={500}
                    showMarker={true}
                    topContent={
                        <View style={styles.centerText}>
                            <Text style={styles.centerText}>Scan QR Code</Text>
                        </View>
                    }
                    bottomContent={
                        <View style={styles.bottomContentContainer}>
                            <Text style={styles.textBold}>QR Code Data: {data}</Text>
                        </View>
                    }
                />
            </View>
        );

    };

    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');

    const handleButtonPress = () => {
        navigation.navigate('Game', { CustomId: inputText });
    }
    if (!showQRScanner ) {
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

                 <Button
                    title="Gửi"
                    onPress={setShowQRScanner(false)}
                />


            </View>

        )
    } else {
        return (
            <View style={styles.qrScannerContainer}>
                <QRCodeScanner
                    onRead={handleQRRead}
                    reactivate={true}
                    reactivateTimeout={500}
                    showMarker={true}
                    topContent={
                        <View style={styles.centerText}>
                            <Text style={styles.centerText}>Scan QR Code</Text>
                        </View>
                    }
                    bottomContent={
                        <View style={styles.bottomContentContainer}>
                            <Text style={styles.textBold}>QR Code Data: {data}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
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