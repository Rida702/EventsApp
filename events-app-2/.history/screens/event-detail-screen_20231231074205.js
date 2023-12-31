import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import EventList from "../components/events/event-list";

const EventDetailScreen = () => {
  const route = useRoute();
  const { eventId, name, description, qrCode } = route.params;

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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
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
  },
  qrCode: {
    width: 150,
    height: 150,
  },
});

export default EventDetailScreen;
