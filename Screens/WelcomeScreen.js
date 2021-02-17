import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
      <View style={styles.container}>
        <Button
          title="Second Screen"
          onPress={() => navigation.navigate('Seecond')} 
        />
       </View>
    );
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: "center",
          justifyContent: 'center',
        }, 
})

export default WelcomeScreen;