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
import Card from "./Card";

// Start of Home Screen Display
const CardList = props => {

    return (
        <SafeAreaView>
            <View>
                {props.goats.map((goat, index) => (
                    <View key={goat.id ? goat.id : index}>
                    <Card goat={goat}/>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default CardList;
