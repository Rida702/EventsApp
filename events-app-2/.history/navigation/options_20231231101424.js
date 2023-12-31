import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';

export const navOptions = (nav) => {
  return {
    headerTintColor: '#cbd5e1',
    headerStyle: {
      backgroundColor: 'white',
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
      <Text style={{ color: 'black', fontSize: 20, paddingLeft: 14, paddingRight:50 }}>EventSphere</Text>
    ),
  };
};
