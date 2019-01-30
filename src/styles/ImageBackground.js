import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import DigitalWorld from '../resources/images/DigitalWorld.jpg';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('DigialWorld')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

class TestBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
              <Text style={styles.text}>Fullscreen!</Text>
            </BackgroundImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

export default TestBackgroundImage