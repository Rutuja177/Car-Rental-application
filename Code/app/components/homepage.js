import React from 'react';

import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class HomePage extends React.Component
{
    moveToSignUP=()=> {
      

    }

  render(){
    return(
      <View style={styles.SignUp}>
        {/* <Text style={styles.header}>Query 1</Text>
        <Text style={styles.header}>Query 2</Text> */}
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.moveToSignUP}
          >Query 1-SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecord}
          >Query 2</Text>
          </TouchableOpacity>
    </View>

    );  
    }
}

const styles = StyleSheet.create({
      SignUp: {
          alignSelf: 'stretch'

      },
      header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
      },
      TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
      },
      button: {
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 8,
          backgroundColor: '#59cbbd',
          marginTop: 5,
      }
});



























