import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './app/components/SignUp';
import NewVehicle from './app/components/NewVehicle';
import NewRent from './app/components/NewRent';
import UpdateRent from './app/components/UpdateRent';
// import View1 from './app/components/View1';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}  
      />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        title="NewVehicle"
        onPress={() => navigation.navigate('NewVehicle')}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        title="NewRent"
        onPress={() => navigation.navigate('NewRent')}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        title="UpdateRent"
        onPress={() => navigation.navigate('UpdateRent')}
        />
      </View>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        title="View1"
        onPress={() => navigation.navigate('View1')}
        />
      </View> */}
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NewVehicle" component={NewVehicle} />
      <Stack.Screen name="NewRent" component={NewRent} />
      <Stack.Screen name="UpdateRent" component={UpdateRent} />
      {/* <Stack.Screen name="View1" component={View1} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
