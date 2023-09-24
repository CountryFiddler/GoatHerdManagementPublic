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
import {useEffect} from "@types/react";
import {fetchDoes, getDoeIDs} from "../functions/DoeFunctions";

// Start of Home Screen Display
const CardList = props => {
    /*const [goatIDs, setGoatIDs] = useState([]);


    useEffect(() => {
        getDoeIDs(setGoatIDs);
    }, []);*/

    //const goats = props.navigation.getParam('goats');
    return (
        <SafeAreaView>
            <View style={styles.cardContainer}>
                {props.goats.map((goat, index) => (
                    <View key={goat.id ? goat.id : index}>
                        <Card goat={goat} navigation={props.navigation}/>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default CardList;
const styles = StyleSheet.create({
    container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold'},
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 8,
    },
    buttonText: {color: 'white', padding: 16, fontSize: 18},
    cardContainer: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'},
});
