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
const BuckButton = props => {

    return (
        <SafeAreaView>
            <View>
                <Button  onPress={() => props.navigation.navigate('BucksScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="BucksScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default BuckButton;
