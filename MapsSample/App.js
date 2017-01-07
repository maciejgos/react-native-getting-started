import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    Alert,
} from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return( 
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map} 
                />
                <Button 
                    title="Take Picture"
                    style={styles.button}
                    onPress={onTakePictureButtonPress}
                />
            </View>
        );
    }
}

const onTakePictureButtonPress = () => {
    Alert.alert("Butto is pressed!");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
      height: height,
      width: width,
      padding: 20,
  },
  button: {
      margin: 20,
  }
});

module.exports = App;