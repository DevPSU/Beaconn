import React from 'react'
import { StyleSheet, View, TextInput, Text, StatusBar, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar 
            barStyle="light-content"
          />

          <TextInput 
            style={styles.input}
            placeholder="email"
            placeholderTextColor= 'white'
            returnKeyType="next"
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
          />

        <View style={styles.buttonCon}>
            <TouchableOpacity>

            <View style={styles.fixToText}>
          <Button
            title="LOGIN"
            onPress={console.log("LOGIN")}
          />
          <Button
            title="SIGN UP"
            onPress={console.log("LOGIN")}
          />
        </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
})