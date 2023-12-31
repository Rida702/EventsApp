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
      <Text style={styles.title}>Event {eventId} Details:</Text>
      <Text style={styles.text1}>{name}</Text>
      <Text style={styles.text2}>{description}</Text>
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
    backgroundColor:'',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#ffe300',
    alignSelf:'center',
    padding:5,
  },
  text1: {
    color: '#0aabf2', 
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    
  },
  text2: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: '#f2e78d', 
    
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
