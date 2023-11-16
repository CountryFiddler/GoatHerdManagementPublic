import React, {useState} from 'react';
import {deleteDoe} from "../functions/DoeFunctions";
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
const GoatProfileScreen = props => {
    const goat = props.route.params.goat;
    console.log(goat.__typename);
    return (
        <SafeAreaView>
            <View>
                <Text>Goat Profile Screen</Text>
                <Text style={styles.todoName}>{goat.name}</Text>
                <Text style={styles.todoDescription}>{goat.description}</Text>
                <Text style={styles.todoDescription}>{goat.age}</Text>
                <Text style={styles.todoDescription}>{goat.dob}</Text>
            </View>
            <Button title={'Delete Goat'} onPress={() => {deleteDoe(goat); props.navigation.navigate('DoesScreen')}}>Delete</Button>
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

export default GoatProfileScreen;
