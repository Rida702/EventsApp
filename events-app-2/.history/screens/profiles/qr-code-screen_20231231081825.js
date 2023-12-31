import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRCodeScreen = () => {
    return ( 
        <View style={styles.screen} >
            <Text>Scan QR Code</Text>
        </View>
     );
}
 
const styles = StyleSheet.create ({
    screen: {
        padding:20,
    }
})
export default QRCodeScreen;