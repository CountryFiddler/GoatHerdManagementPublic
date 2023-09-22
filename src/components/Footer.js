import React, {useState} from 'react';
import DoeButton from "../components/Buttons/DoeButton"
import BuckButton from "../components/Buttons/BuckButton";
import KiddingScheduleButton from "../components/Buttons/KiddingScheduleButton";
import MaintenanceButton from "../components/Buttons/MaintenanceButton";
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
const Footer = props => {

    return (
        <SafeAreaView>
            <View>
                <DoeButton navigation={props.navigation} buttonTitle={'Does'}/>
                <BuckButton navigation={props.navigation} buttonTitle={'Bucks'}/>
                <KiddingScheduleButton navigation={props.navigation} buttonTitle={'Kidding Schedule'}/>
                <MaintenanceButton navigation={props.navigation} buttonTitle={'Maintenance'}/>
            </View>
        </SafeAreaView>
    );
};

export default Footer;
