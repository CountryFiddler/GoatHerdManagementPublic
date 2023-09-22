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
const Card = props => {

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.todoName}>{props.goat.name}</Text>
                <Text style={styles.todoDescription}>{props.goat.description}</Text>
                <Text style={styles.todoDescription}>{props.goat.age}</Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold', marginLeft: 15},
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 8,
    },
    todoDescription: {marginLeft: 15},
    buttonText: {color: 'white', padding: 16, fontSize: 18},
});

export default Card;
