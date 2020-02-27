import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";

export default function BeaconConnectScreen({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Inbox');
}

  return (
    <View>
      <TouchableOpacity onPress={pressHandler}>
        <Text>Beacon Connect</Text>
      </TouchableOpacity>
    </View>
  );
}
