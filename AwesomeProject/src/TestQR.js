import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';

const TestQR = () => {
    const [data, setData] = useState('');
    return (
            <QRCodeScanner
                onRead={({ data }) => setData(data)}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                reactivate={true}
                reactivateTimeout={500}
                showMarker={true}
                topContent={
                    <View style={styles.centerText}>
                        <Text style={styles.centerText}>Scan QR Code</Text>
                    </View>
                }
                bottomContent={
                    <View style={styles.centerText}>
                        <Text style={styles.textBold}>QR Code Data: {data}</Text>
                    </View>
                }
            />
    )
}
export default TestQR
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: 'black',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
        color: 'white',
    },
})