import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';

export const navOptions = (nav) => {
  return {
    headerTintColor: '#cbd5e1',
    headerStyle: {
      backgroundColor: '#81cef0',
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
      <Text style={{ color: 'white', fontSize: 20, paddingLeft: 14, paddingRight:50,  }}>EventSphere</Text>
    ),
  };
};
