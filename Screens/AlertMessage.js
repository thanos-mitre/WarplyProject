import React from 'react';
import {Alert, Button, View, SafeAreaView, StyleSheet} from 'react-native';

const AlertHandler = () => {
    alert('Some services may not work correctly');
};

function AlertMessage(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <Button
              title="Alert"
              onPress={AlertHandler} />
          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
});

export default AlertMessage;