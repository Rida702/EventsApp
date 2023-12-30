const { View,Text,StyleSheet } = require("react-native")

const EventDetailScreen = () => {

    return (
        <View style = {styles.screen} >
            <Text>this is event detail screen</Text>

        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        padding:20,
    }
})
export default EventDetailScreen;