import { useState } from "react";
import { View,TextInput } from "react-native";

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
            <TextInput/>
        </View>
      );

}
 
export default NewEventScreen;