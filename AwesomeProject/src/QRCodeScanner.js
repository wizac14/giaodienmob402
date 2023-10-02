import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

class QRCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  onBarCodeRead = (e) => {
    // Xử lý dữ liệu mã QR code ở đây
    console.log(e.data); // Dữ liệu mã QR
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default QRCodeScanner;
