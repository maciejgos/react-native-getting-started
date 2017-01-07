import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return( 
            <View style={styles.container}>
                <Text>
                    Hello from React Native!!!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = App;