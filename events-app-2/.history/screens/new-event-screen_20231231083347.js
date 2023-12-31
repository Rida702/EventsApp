import { useState } from "react";
import { View,TextInput,StyleSheet } from "react-native";

const NewEventScreen = () => {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [data,setData] = useState(new Date())
    const [alert,setAlert] = useState({
        isVisible: false,
        msg : ''
    })
    
    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="name"
                style={}

            />
        </View>
      );

}

const styles = StyleSheet.create({
    screen: {
        padding:20,
    },
    input : {
        height:40,
        
    }
})
 
export default NewEventScreen;