//Login.js
import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Image, Text } from "react-native";

import LoginForm from './LoginForm';

export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  onLogin = async () => {
    const { email, password } = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      alert(error);
    }
  };

  goToSignup = () => this.props.navigation.navigate("Signup");
  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo} 
            source={require("../images/logo.png")} />

          <Text style={styles.title}>Population headcount. Population engagment.</Text>

        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34465d",

  },
  formContainer: {
    flex:1
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
    color: 'white',
    marginTop: 5,
    width: 200,
    textAlign: 'center',
    opacity: 0.9
  }
});
