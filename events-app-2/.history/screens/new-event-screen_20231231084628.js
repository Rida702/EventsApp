import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const NewEventScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setData] = useState(new Date());
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  });

  return (
    <View style={styles.screen}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="description"
        multiline='true'
        style={styles.input}
      />
      <TextInput
        value={date}
        onChangeText={setDa}
        placeholder="name"
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
