import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Test({ navigation }) {

    const pressHandler = () => {
      navigation.goBack();
    }

  return (
    <View>
        <TouchableOpacity onPress={pressHandler}>
        <Text>Test</Text>
        </TouchableOpacity>
    </View>
  );
}