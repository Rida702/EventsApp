import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import QRCodeScreen from '../screens/profiles/qr-code-screen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown : false,
            tabBarShowLabel : false,
            tabBarStyle : {
                backgroundColor:'white',
            },
            tabBarActiveTintColor : 'yellow',
            //tabBarInactiveTintColor : 'red',
            tabBarIcon : ({focused, color, size }) => {
                let iconName;
                if (route.name === 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'QRCode') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline'
                }
                return <Ionicons name={iconName} size={focused? 35: size } color={color} /> 
            }
        })} 
    >
      <Tab.Screen name="HomeTabs" 
        options={{
            title:'Home'
        }}
        component={HomeScreen} />
      <Tab.Screen name="QRCode" component={QRCodeScreen} />
    </Tab.Navigator>
  );
}