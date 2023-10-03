import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';
const PlayMiniGame = () => {
    //khai báo biến QR
    const [data, setData] = useState('');

    const [showQRScanner, setShowQRScanner] = useState(false); // Biến state để điều khiển hiển thị quét QR
    const handleQRRead = ({ data }) => {
        setData(data);
        console.log("data", data);
        setShowQRScanner(false); // Ẩn quét QR sau khi quét thành công
    };

    const handleQRScannerClose = () => {
        setShowQRScanner(false); // Đóng quét QR khi nút được kích hoạt
    };
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // const QRCode = () => {
    //     return (
    //         <View style={styles.qrScannerContainer}>
    //             <QRCodeScanner
    //                 onRead={handleQRRead}
    //                 reactivate={true}
    //                 reactivateTimeout={500}
    //                 showMarker={true}
    //                 topContent={
    //                     <View style={styles.centerText}>
    //                         <Text style={styles.centerText}>Scan QR Code</Text>
    //                     </View>
    //                 }
    //                 bottomContent={
    //                     <View style={styles.bottomContentContainer}>
    //                         <Text style={styles.textBold}>QR Code Data: {data}</Text>
    //                     </View>
    //                 }
    //             />
    //         </View>
    //     );
    // };
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    const handleButtonPress = () => {
        // Kiểm tra độ dài của inputText
    if (inputText.length < 1) {
        Alert.alert('Lỗi', 'Phải nhập thông tin ');
        return;
    }

    navigation.navigate('Game', { CustomId: inputText });
    }
    if (!showQRScanner) {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Nhập thông tin:</Text>
                <TextInput
                    //validations here...
                    style={styles.input}
                    onChangeText={text => setInputText(text)}
                    value={inputText}
                    placeholder="Nhập vào đây"
                />
                <View style={{ flexDirection: 'row' }}>
                    <Button style={styles.button}
                        title="Gửi"
                        onPress={handleButtonPress}
                    />
                    <Button style={styles.button}
                        title="Quét QR"
                        onPress={() => setShowQRScanner(true)}
                    />
                </View>
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
                <TouchableOpacity onPress={handleQRScannerClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
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
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: 'black',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
        color: 'black',
    },
    qrScannerContainer: {
        flex: 1,
        width: '100%',
    },
    bottomContentContainer: {
        left: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    closeButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        width: '40%',
        margin: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderColor: '#FF7A00',
        borderRadius: 10,
        borderWidth: 3,
    },
});