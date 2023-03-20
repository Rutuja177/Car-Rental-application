import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class UpdateRent extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={CustomerID:'',VehicleID:'', ReturnDate:''};
  }

  InsertRecord=()=> {
      var CustomerID = this.state.CustomerID;
      var VehicleID = this.state.VehicleID;
      var ReturnDate = this.state.ReturnDate;

      if (CustomerID.length == 0 || VehicleID.length == 0)
      {
      alert("NO DATA");
      }
      else
      {
      var formdata = new FormData();
      formdata.append("CustomerID", CustomerID);
      formdata.append("VehicleID", VehicleID);
      formdata.append("ReturnDate", ReturnDate);


      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost/db/UpdateRentedCarPayment.php", requestOptions)
        .then(response => response.text())
        .then(result => alert('Rented Car data updated successfully'))
        .catch(error => console.log('error', error));
     }
  }
  render(){
    return(
      <View style={styles.SignUp}>
        <Text style={styles.header}>Update Rented Car</Text>
        <TextInput style={styles.TextInput} placeholder={"CustomerID"}
          underlineColorAndroid={'transparent'}
          onChangeText={CustomerID=>this.setState({CustomerID})}
        /> 
        <TextInput style={styles.TextInput} placeholder={"VehicleID"}
        underlineColorAndroid={'transparent'}
        onChangeText={VehicleID=>this.setState({VehicleID})}
        />
        <TextInput style={styles.TextInput} placeholder={"ReturnDate"}
          underlineColorAndroid={'transparent'}
          onChangeText={ReturnDate=>this.setState({ReturnDate})}
        />
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecord}
          >Update Rent</Text>
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