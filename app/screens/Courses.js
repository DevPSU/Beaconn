import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';


export default class Courses extends React.Component {
    state = {
        classes: [],
        dialogVisible:false,
    }

    addClass = (textinput) => {
        this.closeDialog()
        this.setState( (prevState) => ({
            classes:[...prevState.classes,{className:textinput}]
        })
        )
    }

    closeDialog = () => {
        this.setState({ dialogVisible: false });
      };

    showDialog = () => {
    this.setState({ dialogVisible: true });
    };

    render() {
    return(
      <View style={styles.container}>

          <View style={styles.addClassContainer}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.showDialog()}}>
                <Text style={styles.addClassText}>+</Text>
                <Text style={styles.addClassText}>Add class</Text>
              </TouchableOpacity>
              <DialogInput isDialogVisible={this.state.dialogVisible}
            title={""}
            message={"Enter your class name"}
            hintInput ={"Class name"}
            submitInput={ (inputText) => {this.addClass(inputText)} }
            closeDialog={ () => {this.closeDialog()}}>
            </DialogInput>

          </View>
        
          <View style={styles.classContainer}>
    
              <FlatList
              data={this.state.classes}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.box}>
                    <Text>{item.className}</Text>
                  </TouchableOpacity>
              )}/>
          </View>
          
      </View>
      
    );}
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",


    },
    addClassContainer: {
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.2)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    classContainer: {
        flex:10
    },
    addClassText:{
        fontSize:30,
        color:'#4287f5'

    },
    box:{
        flex:1,
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        borderRadius:25,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding:100,
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    }
})
    



