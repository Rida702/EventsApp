import { useRoute } from "@react-navigation/native"

const { View,Text,StyleSheet } = require("react-native")

const EventDetailScreen = () => {
    const route = useRoute()
    const {eventId, title, description} = route.params

    return (
        <View style = {styles.screen} >
            <Text style={{fontSize:20}} >Event detail for {eventId}</Text>
            <Text style={{fontSize:20}} >{title}</Text>
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