import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLayoutEffect } from "react";
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { eventId, name, description, qrCode } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: () => (
        <HeaderBackButton
          tintColor='#cbb65f'
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, name]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Event {eventId} Details</Text>
      <Text style={styles.text1}>{name}</Text>
      <Text style={styles.text2}>{description}</Text>
      <Text >Hiii</Text>
      <View style={styles.qrCodeContainer}>
        <Image
            style={styles.qrCode}
            source={{ uri: qrCode }}
            resizeMode="contain"
            onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 20,
    backgroundColor:'#f0b5c1',
    // backgroundColor: '#f2e78d', 
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    
    alignSelf:'center',
    padding:5,    
  },
  text1: { 
    color: 'black', 
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    backgroundColor: '#f06a85',
    borderRadius: 70,          
    paddingHorizontal: 20,
    width: 220,
  },
  text2: {
    fontSize: 14,
    marginBottom: 10,
    
  },
  qrCodeContainer: {
    alignItems: "center",
  },
  qrCode: {
    width: 150,
    height: 150,
  },
});

export default EventDetailScreen;
