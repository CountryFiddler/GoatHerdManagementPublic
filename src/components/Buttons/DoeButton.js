import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    TouchableWithoutFeedback,
    Alert,
    Platform,
} from 'react-native';

// Start of Home Screen Display
const DoeButton = props => {

    return (
        <SafeAreaView style={props.style}>
            <View>
                <Button  onPress={() => props.navigation.navigate('DoesScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="DoesScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default DoeButton;
