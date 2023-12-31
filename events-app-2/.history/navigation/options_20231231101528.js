import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';

export const navOptions = (nav) => {
  return {
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#c9b76b',
    },
    headerRight: () => (
      <Ionicons style={{paddingRight:10}}
        name="menu"
        size={32}
        color="black"
        onPress={() => nav.toggleDrawer()}
      />
    ),
    headerLeft: () => (
      <Text style={{ color: 'black', fontSize: 20, paddingLeft: 14, paddingRight:40 }}>EventSphere</Text>
    ),
  };
};
