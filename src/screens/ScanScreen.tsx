import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { RNCamera } from 'react-native-camera';
const ScanScreen = () => {
  const onBarCodeRead = (scanResult: { data: string }) => {
    console.log('QR Code detected:', scanResult.data);
    // Here you would typically send this data to your backend
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Position the QR code within the frame</Text>
        </View>
      </RNCamera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ScanScreen;