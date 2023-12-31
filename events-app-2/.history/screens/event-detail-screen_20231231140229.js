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
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
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
    padding: 20,
    backgroundColor: '#eee0a9',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  qrCodeContainer: {
    alignItems: "center",
    backgroundColor: '#eee0a9',
  },
  qrCode: {
    width: 150,
    height: 150,
  },
});

export default EventDetailScreen;
