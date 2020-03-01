import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";

export default class BeaconConnectScreen extends Component {
  render(){

    console.log(this.props.navigation.state.params.passedData.title);

  return (
    <View style={styles.container}>
      <Text style={styles.beaconButton}>{this.props.navigation.state.params.passedData.title} - {this.props.navigation.state.params.passedData.body}</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardContent}>CHECK IN</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.card}>
        <Text style={styles.cardContent}>ENGAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardContent}>INBOX</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  beaconButton: {
    fontSize: 20,
    color: "#2fcc76",
    textAlign: "center"
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
