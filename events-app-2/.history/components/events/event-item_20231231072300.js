import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, Image, View } from "react-native";

const EventItem = ({id,name,description, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event",{eventId:id, name, description})}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Image 
                style={{width:100,height:100}} 
                source={{ uri : qrCode }}
            />
        </TouchableOpacity>
        
    );
}
  //<EventItem id={item.id} title={item.title} description={item.description} />

const styles = StyleSheet.create ({
    card : {
        flexDirection: 'row',
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }

})
export default EventItem;