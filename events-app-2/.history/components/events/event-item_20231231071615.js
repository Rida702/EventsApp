import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, Image } from "react-native";

const EventItem = ({id,name,description, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event",{eventId:id, title, description})}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Image 
                style={{width:100,height}}
            />
        </TouchableOpacity>
        
    );
}
  //<EventItem id={item.id} title={item.title} description={item.description} />

const styles = StyleSheet.create ({
    card : {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }

})
export default EventItem;