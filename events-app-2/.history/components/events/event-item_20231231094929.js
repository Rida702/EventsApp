import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, Image, View } from "react-native";

const EventItem = ({id,name,description, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event",{eventId:id, name, description})}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                        <Text>{name}</Text>
                        <Text style={{ fontSize: 12 }}>{description}</Text>
                </View>
                    <Image
                        style={{ width: 75, height: 80 }}
                        source={{ uri: qrCode }}
                    />
            </View>

        </TouchableOpacity>
        
    );
}
  //<EventItem id={item.id} title={item.title} description={item.description} />

const styles = StyleSheet.create ({
    card : {
        flexDirection: 'row',
        backgroundColor:'#deb714',
        borderWidth: 1,
        justifyContent:'space-around',
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 20,
        alignItems:'center'
    }

})
export default EventItem;