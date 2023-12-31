import { useState } from "react";
import { View } from "react-native";

const NewEventScreen = () => {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [data,setData] = useState(new DataTransfer())
    const [alert,setAlert] = useState('')
    
    return (
        <View>

        </View>
      );

}
 
export default NewEventScreen;