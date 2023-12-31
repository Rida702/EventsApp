import { useRoute } from "@react-navigation/native"

const { View,Text,StyleSheet } = require("react-native")

const EventDetailScreen = () => {
    const route = useRoute()
    const {eventId, name, description, qrCode} = route.params

    return (
        <View style = {styles.screen} >
            <Text style={{fontSize:20}} >Event {eventId} Details:</Text>
            <Text style={{fontSize:20}} >{name}</Text>
            <Text style={{fontSize:20}} >{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        padding:20,
    }
})
export default EventDetailScreen;