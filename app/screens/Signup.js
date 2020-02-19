//Login.js
import * as React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  Button,
  StatusBar
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Signup extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  onLoginSignUp = async () => {
    try {
      if (
        this.state.email.length > 0 &&
        this.state.password.length > 0 &&
        this.state.firstname.length > 0 &&
        this.state.lastname.length > 0
      ) {
        console.log("LOGIN");
        //REGISTER USER

        //AUTHENTICATION SECTION
        //REDIRECTIONS WITH SERVER CONNECTIONS

        this.props.navigation.navigate("App");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/logo.png")} />

          <Text style={styles.title}>
            Population headcount. Population engagment.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={{ padding: 20 }}>
            <StatusBar barStyle="light-content" />

            <View>
              <TextInput
                style={styles.input}
                placeholder="first name"
                placeholderTextColor="white"
                returnKeyType="next"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.firstname}
                onChangeText={firstname => this.setState({ firstname })}
                onSubmitEditing={() => this.passwordInput.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder="last name"
                placeholderTextColor="white"
                returnKeyType="next"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.lastname}
                onChangeText={lastname => this.setState({ lastname })}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="email"
              placeholderTextColor="white"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={() => this.passwordInput.focus()}
            />

            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="white"
              secureTextEntry
              returnKeyType="go"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <View style={styles.buttonCon}>
              <TouchableOpacity
                onPress={() => this.onLoginSignUp()}
                style={styles.buttonStyle}
              >
                <View style={styles.fixToText}>
                  <Text style={styles.textStyle}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34465d"
  },
  formContainer: {
    flex: 3
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: "white",
    marginTop: 5,
    width: 200,
    textAlign: "center",
    opacity: 0.9
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10
  },
  buttonCon: {
    flexDirection: "column",
    justifyContent: "center"
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around"
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
  },
  fixToTextTI: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
