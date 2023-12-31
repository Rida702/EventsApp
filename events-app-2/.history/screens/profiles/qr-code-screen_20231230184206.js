import { View,Text, StyleSheet } from "react-native";

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