import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet,Button } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  

  const handleRefresh = () => {
      console.log('Refreshing....')
      setRefresh(prevState => !prevState )
  }

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, [refresh]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.10.4:8000/api/events/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
    }
  };

  return (
    <View style={styles.screen}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <EventList data={data} onRefresh={handleRefresh} />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default HomeScreen;
