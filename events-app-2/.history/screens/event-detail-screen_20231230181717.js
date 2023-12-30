import { useRoute } from "@react-navigation/native"

const { View,Text,StyleSheet } = require("react-native")

const EventDetailScreen = () => {
    const route = useRoute()
    const {eventId, title, description} = route.params

    return (
        <View style = {styles.screen} >
            <Text style={{fontSize:20}} >this is event detail screen for {eventId}</Text>
            <Text style={{fontSize:20}} >{eventId}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        padding:20,
    }
})
export default EventDetailScreen;