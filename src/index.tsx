import React, { Component } from 'react';
import { ViewStyle, TextStyle, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class RTStarter extends Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    A React-Native &amp; TypeScript Starter!
                </Text>
                <Button title="Press Me?" onPress={buttonAction} />
            </View>
        );
    }
}

const buttonAction = () => { Alert.alert("Thanks!") };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as ViewStyle,

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as TextStyle,
});
