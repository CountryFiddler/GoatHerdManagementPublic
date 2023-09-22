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
const KiddingScheduleButton = props => {

    return (
        <SafeAreaView>
            <View>
                <Button  onPress={() => props.navigation.navigate('KiddingScheduleScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="KiddingScheduleScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default KiddingScheduleButton;
