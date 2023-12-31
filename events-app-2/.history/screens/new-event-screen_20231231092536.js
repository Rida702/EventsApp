import { useState,useLayoutEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from "@react-navigation/native";

const NewEventScreen = () => {
  useNavigation
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Event',
      headerLeft: () => (
        <HeaderBackButton
          tintColor='white'
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, name]);



  const handleAddEvent = async() => {
    const d = date.toISOString().slice(0,10)
    console.log(d)

    const data = {
        name,
        description,
        date: d,
    }

    const response = await fetch('http://192.168.10.4:8000/api/events/', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify(data)
    })

    const res = await response.json()
    setAlert({isVisible:true, msg: 'event added'})

  }

  return (
    <View style={styles.screen}>
        {alert.isVisible && (
            <View style={styles.container}>
                <Text style={styles.text}>{alert.msg}</Text>
            </View>
        )}
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
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={date.toLocaleDateString()}
        onChangeText={setDate}
        placeholder="Event date"
        style={styles.input}
      />
      <Button
        onPress={handleAddEvent} title="add"
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
  container: {
    backgroundColor: 'green', // Set your preferred background color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: 'white', // Set your preferred text color
    fontSize: 16,
  },
});

export default NewEventScreen;
