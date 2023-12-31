import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { profileId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="#d5c16e"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, route]);

  return (
    <View >
      <Text >Profile id: {profileId}</Text>
    </View>
  );
};


export default ProfileDetailScreen;
