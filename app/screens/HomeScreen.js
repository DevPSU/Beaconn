import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from '../shared/Card'

export default function Home({ navigation }) {

  const [beacon, setBeacon] = useState([
    { title: 'IST 331', body: 'HUM CTRD DESIGN'},
    { title: 'IST 454', body: 'CYBER FORENSICS'},
    { title: 'SRA 211', body: 'THREAT OF TERR & CRM'},
    { title: 'SRA 221', body: 'OVRVIEW OF INFO SEC'}
  ]);

  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Text style={styles.beaconButton}> + ADD BEACON</Text>
        </TouchableOpacity>
        <FlatList data={beacon} renderItem={({ item }) =>(
          <TouchableOpacity>
              <Card>
                <Text>{item.title}</Text>
              </Card>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  beaconButton:{
    fontSize: 20,
    color: "#2fcc76",
    textAlign: "center"
  }
});
