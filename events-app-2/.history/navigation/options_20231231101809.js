import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';

export const navOptions = (nav) => {
  return {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#0aabf2',
    },
    headerRight: () => (
      <Ionicons style={{paddingRight:10}}
        name="menu"
        size={32}
        color="white"
        onPress={() => nav.toggleDrawer()}
      />
    ),
    headerLeft: () => (
      <Text style={{ color: '#f6e499', fontSize: 20, paddingLeft: 14, paddingRight:40 }}>EventSphere</Text>
    ),
  };
};
