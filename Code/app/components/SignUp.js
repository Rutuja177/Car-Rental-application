import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SignUp extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={YourName:'',PhoneNumber:''};
  }

  InsertRecord=()=> {
      var YourName = this.state.YourName;
      var PhoneNumber = this.state.PhoneNumber;

      if (YourName.length == 0 || PhoneNumber.length == 0)
      {
      alert("NO DATA");
      }
      else
      {
      var formdata = new FormData();
      formdata.append("Name", YourName);
      formdata.append("Phone", PhoneNumber);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost/db/InsertInfo.php", requestOptions)
        .then(response => response.text())
        .then(result => alert('Signed Up successfully'))
        .catch(error => console.log('error', error));
     }
  }
  render(){
    return(
      <View style={styles.SignUp}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.TextInput} placeholder={"YourName"}
          underlineColorAndroid={'transparent'}
          onChangeText={YourName=>this.setState({YourName})}
        /> 
        <TextInput style={styles.TextInput} placeholder={"PhoneNumber"}
        underlineColorAndroid={'transparent'}
        onChangeText={PhoneNumber=>this.setState({PhoneNumber})}
        />
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecord}
          >Sign up</Text>
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
        color: '#199187',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
      },
      TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000',
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