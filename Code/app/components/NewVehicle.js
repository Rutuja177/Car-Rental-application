import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
//     for (var i = 0; i < 17; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
//   }
  
//   console.log(makeid());
export default class NewVehicle extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={VehicleID:''}
    this.state={Description:''};
    this.state={Year:''};
    this.state={Type:''};
    this.state={Category:''};
  }

  InsertRecord=()=> {
      var VehicleID = this.state.VehicleID;
      var Description = this.state.Description;
      var Year = this.state.Year;
      var Type = this.state.Type;
      var Category = this.state.Category;
      if (VehicleID.length == 0 || Description.length == 0 || Year.length == 0 || Type.length == 0 || Category.length == 0 )
      {
      alert("NO DATA");
      }
      else
      {
      var formdata = new FormData();
      formdata.append("VehicleID", VehicleID);
      formdata.append("Description",Description);
      formdata.append("Year",Year);
      formdata.append("Type",Type);
      formdata.append("Category",Category);
        
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost/db/InsertVehicle.php", requestOptions)
        .then(response => response.text())
        .then(result => alert('Vehicle data inserted successfully'))
        .catch(error => console.log('error', error));
     }
  }
  render(){
    return(
      <View style={styles.NewVehicle}>
        <Text style={styles.header}>New Vehicle Information</Text>

        <TextInput style={styles.TextInput} placeholder={"VehicleID"}
          underlineColorAndroid={'transparent'}
          onChangeText={VehicleID=>this.setState({VehicleID})}
        />
        <TextInput style={styles.TextInput} placeholder={"Description"}
          underlineColorAndroid={'transparent'}
          onChangeText={Description=>this.setState({Description})}
        />
        <TextInput style={styles.TextInput} placeholder={"Year"}
          underlineColorAndroid={'transparent'}
          onChangeText={Year=>this.setState({Year})}
        />
        <TextInput style={styles.TextInput} placeholder={"Type"}
          underlineColorAndroid={'transparent'}
          onChangeText={Type=>this.setState({Type})}
        />
        <TextInput style={styles.TextInput} placeholder={"Category"}
          underlineColorAndroid={'transparent'}
          onChangeText={Category=>this.setState({Category})}
        />
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecord}
          >Enter</Text>
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
        color: '#000000',
        borderBottomColor: '#000000',
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