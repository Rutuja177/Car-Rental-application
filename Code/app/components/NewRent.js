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
    this.state={//CustomerID:'',
    StartDate:'',
    ReturnDate:'',
    OrderDate:'',
    Category:'',
    Type:'',
    RentalType:'',
    Quantity:''};
  }

  InsertRecordPayNow=()=> {
      var CustomerID = this.state.CustomerID;
      var StartDate = this.state.StartDate;
      var ReturnDate = this.state.ReturnDate;
      var OrderDate = this.state.OrderDate;
      var Category = this.state.Category;
      var Type = this.state.Type;
      var RentalType = this.state.RentalType;
      var Quantity = this.state.Quantity;
      if (CustomerID.length == 0)
      {
      alert("NO DATA");
      }
      else
      {
      var formdata = new FormData();
      formdata.append("CustomerID", CustomerID);
      formdata.append("StartDate", StartDate);
      formdata.append("ReturnDate", ReturnDate);
      formdata.append("OrderDate", OrderDate);
      formdata.append("Category", Category);
      formdata.append("Type", Type);
      formdata.append("RentalType", RentalType);
      formdata.append("Quantity", Quantity);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      const result = fetch("http://localhost/db/InsertRentPayNow.php", requestOptions)
        .then(response => response.text())
        .then(result => alert('Car Rented Successfully'))
        .catch(error => console.log('error', error));
     }
  }

  InsertRecordPayLater=()=> {
    var CustomerID = this.state.CustomerID;
    var StartDate = this.state.StartDate;
    var ReturnDate = this.state.ReturnDate;
    var OrderDate = this.state.OrderDate;
    var Category = this.state.Category;
    var Type = this.state.Type;
    var RentalType = this.state.RentalType;
    var Quantity = this.state.Quantity;
    if (CustomerID.length == 0)
    {
    alert("NO DATA");
    }
    else
    {
    var formdata = new FormData();
    formdata.append("CustomerID", CustomerID);
    formdata.append("StartDate", StartDate);
    formdata.append("ReturnDate", ReturnDate);
    formdata.append("OrderDate", OrderDate);
    formdata.append("Category", Category);
    formdata.append("Type", Type);
    formdata.append("RentalType", RentalType);
    formdata.append("Quantity", Quantity);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    const result = fetch("https://6941-64-189-206-160.ngrok.io/InsertRentPayLater.php", requestOptions)
      .then(response => response.text())
      .then(result => alert('Rented Successfully'))
      .catch(error => console.log('error', error));
   }
}
  render(){
    return(
      <View style={styles.SignUp}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.TextInput} placeholder={"CustomerID"}
          underlineColorAndroid={'transparent'}
          onChangeText={CustomerID=>this.setState({CustomerID})}
        /> 
        <TextInput style={styles.TextInput} placeholder={"StartDate"}
        underlineColorAndroid={'transparent'}
        onChangeText={StartDate=>this.setState({StartDate})}
        />
        <TextInput style={styles.TextInput} placeholder={"ReturnDate"}
        underlineColorAndroid={'transparent'}
        onChangeText={ReturnDate=>this.setState({ReturnDate})}
        />
        <TextInput style={styles.TextInput} placeholder={"OrderDate"}
        underlineColorAndroid={'transparent'}
        onChangeText={OrderDate=>this.setState({OrderDate})}
        />
        <TextInput style={styles.TextInput} placeholder={"Category"}
        underlineColorAndroid={'transparent'}
        onChangeText={Category=>this.setState({Category})}
        />
        <TextInput style={styles.TextInput} placeholder={"Type"}
        underlineColorAndroid={'transparent'}
        onChangeText={Type=>this.setState({Type})}
        />
        <TextInput style={styles.TextInput} placeholder={"RentalType"}
        underlineColorAndroid={'transparent'}
        onChangeText={RentalType=>this.setState({RentalType})}
        />
        <TextInput style={styles.TextInput} placeholder={"Quantity"}
        underlineColorAndroid={'transparent'}
        onChangeText={Quantity=>this.setState({Quantity})}
        />
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecordPayNow}
          >PayNow</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.button}
          onPress={this.InsertRecordPayLater}
          >PayLater</Text>
        </TouchableOpacity>
        </View>
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
        padding: 10,
        paddingBottom: 10,
        marginBottom: 30,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
      },
      TextInput: {
        alignSelf: 'stretch',
        height: 40,
        padding: 10,
        marginBottom: 30,
        color: '#000',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
      },
      button: {
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 6,
          backgroundColor: '#59cbbd',
          marginTop: 5,
      }
});