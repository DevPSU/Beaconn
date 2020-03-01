import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function UserSettingsScreen({ navigation }) {

  const ResetPassword = () => {
    navigation.navigate('ChangePassword');
}

  const SignOut = () =>{
    navigation.navigate('SignIn');
  }



  return (
<View style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}>
        <View style={styles.onethird}>
          <View style={styles.oneonethird}>
            <Image
              source={require("../images/blank-profile-picture.jpg")}
              style={{ width: 100, height: 100, borderRadius: 400 / 2 }}
            />
          </View>

          <View style={styles.onetwothird}>
            <Text>JANE DOE</Text>
          </View>
        </View>
        <View style={styles.twothird}>
        <TouchableOpacity
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>CHANGE PROFILE IMAGE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ResetPassword}
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>RESET PASSWORD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SignOut}
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>SIGN OUT</Text>
          </TouchableOpacity>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34465d"
  },
  onethird: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  oneonethird: {
    flex: 1,
    alignItems: "center"
  },
  onetwothird: {
    flex: 2,
    fontSize: 30,
    fontFamily: "San Francisco"
  },
  twothird: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    color: "#2fcc76",
    textAlign: "center"
  }
});
