//Login.js
import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Image, Text, TextInput, Button, StatusBar } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'


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

    try {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        console.log("Login success");

        //AUTHENTICATION SECTION
        //REDIRECTIONS WITH SERVER CONNECTIONS


        this.props.navigation.navigate("App");
      }
    } catch (error) {
      console.log(error);
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
          {/*<LoginForm/>*/}
            <View style={{padding:20}}>
            <StatusBar 
              barStyle="light-content"
            />

            <TextInput 
              style={styles.input}
              placeholder="email"
              placeholderTextColor= 'white'
              returnKeyType="next"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
            />

          
            <TextInput 
              style={styles.input}
              placeholder="password"
              placeholderTextColor= 'white'
              secureTextEntry
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />

          <View style={styles.buttonCon}>
              <TouchableOpacity>

              <View style={styles.fixToText}>
                <Button
                  color="#2fcc76"
                  title="LOGIN"
                  onPress={() => this.onLogin()}
                />
                
                <Button
                  color="#2fcc76"
                  title="SIGN UP"
                  onPress={() =>this.goToSignup()}
                />
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
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10
},
buttonCon:{
  flexDirection: 'column',
  justifyContent: 'center'
},
button:{
  backgroundColor: 'green',
  width: '40%',
  height: 40
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-around',
},
});
