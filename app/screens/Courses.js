import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default class Courses extends React.Component {

    addClass = () => {
        console.log("Class created")
    }

    render() {
    return(
      <View>
          <Text>Add class</Text> 
          <Button
          onPress={this.addClass} 
          title="+"/>
      </View>
      
    );}
    
}
    



