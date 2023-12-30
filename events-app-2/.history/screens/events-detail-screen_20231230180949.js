import { useRoute } from "@react-navigation/native"

const { View,Text,StyleSheet } = require("react-native")

const EventDetailScreen = () => {
    const route = useRoute()
    const {eventId} = route.params

    return (
        <View style = {styles.screen} >
            <Text>this is event detail screen for {event</Text>

        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        padding:20,
    }
})
export default EventDetailScreen;