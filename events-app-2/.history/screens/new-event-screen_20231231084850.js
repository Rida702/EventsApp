import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const NewEventScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); // Date as a string
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  });

  // Format date as a string
  const formatDate = (date) => {
    // Implement your date formatting logic here
    return date.toISOString().split("T")[0]; // Example: YYYY-MM-DD
  };

  return (
    <View style={styles.screen}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={formatDate(new Date(date))}
        onChangeText={(text) => setDate(text)}
        placeholder="Event Date (YYYY-MM-DD)"
        style={styles.input}
      />
      {/* Add more TextInput components for other fields as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});

export default NewEventScreen;
