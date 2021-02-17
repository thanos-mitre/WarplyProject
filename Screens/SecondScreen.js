import React from 'react';
import { Alert, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import Test_pois from './test_pois.json';
import AlertMessage from './AlertMessage';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { getDistance } from 'geolib';

const dataPOIS = require('./test_pois.json');

Permissions.request('location', { type: 'always' }).then(response => {
  this.setState({ locationPermission: response })
})


function SecondScreen(props) {
  if(locationPermission){
    navigator.geolocation.getCurrentPosition((position));
    var distanceArray=[];
    for(var i = 0; i<dataPOIS.length; i++){
      distanceArray = geolib.getDistance(position.coords, {latitude: dataPOIS[1][i], longitude: [3][i]});
      Alert.alert(dataPOIS[2][i], "is ", distanceArray[i], " away from you.");
    }
    }else{
    <AlertMessage />
    dataPOIS.sort((a,b) => a.timeM - b.timeM).
    dataPOIS.map((item, i) => (<div key={2}> {item.matchID}  
    {item.timeM} {item.description}</div>))
  }  
  <Map />
  return(
    <ListPOI />
  );
}

function ListPOI() {
  return (
    Alert.alert(dataPOIS)
  );
}

function Map() {
  return (
    <MapView  
        provider= {PROVIDER_GOOGLE}
        style={styles,map}
        region={{
          latitude: 37.970833,
          longitude: 23.726110,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}>
        this.state.store.map(marker = > (
            <Marker>
                coordinate = {{latitude: dataPOIS[i][1], longitude: dataPOIS[i][3]}}
            </Marker>
        ))
  
        </MapView>
  );
}

const styles= StyleSheet.create({
  map: {
      height: '100%'  
  }
})

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListPOI} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}

export default SecondScreen;