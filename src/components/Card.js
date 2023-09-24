import React, {useEffect, useState} from 'react';
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

import {getDoes} from "../graphql/queries";
import {fetchDoes, getDoe} from "../functions/DoeFunctions";

// Start of Home Screen Display
const Card = props => {
  //  let goatName = props.goat.name;
    //const goatDescription = props.goat.description;
   // const goatAge = props.goat.age;
    //const goat = getDoes(props.goat.id);
   // const goat = props.navigation.getParam('goat')
   /* const [goatName, setGoatName] = useState(props.goat.name);
    const [goatDescription, setGoatDescription] = useState(props.goat.description);
    const [goatAge, setGoatAge] = useState([]);
    //console.log(props.goat.name);
    //console.log(goat);

    useEffect(() => {
        getDoe(props.goat.id, setGoat);
    }, []);
    console.log(goat);*/

    return (
        <SafeAreaView>
            <TouchableOpacity            onPress={() =>
                props.navigation.navigate('GoatProfileScreen', {
                    navigation: props.navigation,
                    goat: props.goat,

                })
            }>
                <Text style={styles.todoName}>{props.goat.name}</Text>

            </TouchableOpacity>
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
