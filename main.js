import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }  

    render() {
        return (
            <Text>Digital Affect, Machine Learning</Text>
            );
    }
}

Expo.registerRootComponent(Todo);
