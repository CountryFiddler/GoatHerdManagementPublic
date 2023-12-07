import React from 'react';
import DoeButton from "../components/Buttons/DoeButton"
import BuckButton from "../components/Buttons/BuckButton";
import KiddingScheduleButton from "../components/Buttons/KiddingScheduleButton";
import MaintenanceButton from "../components/Buttons/MaintenanceButton";
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';

const Footer = props => {

    return (
        <SafeAreaView style={props.style}>

                <DoeButton navigation={props.navigation} buttonTitle={'Does'}/>
                <BuckButton navigation={props.navigation} buttonTitle={'Bucks'}/>
                <KiddingScheduleButton navigation={props.navigation} buttonTitle={'Kidding Schedule'}/>
                <MaintenanceButton navigation={props.navigation} buttonTitle={'Maintenance'}/>

        </SafeAreaView>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: { flexDirection: 'row'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold', marginLeft: 15},
    buttonContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    button: {width: 75, height: 35, backgroundColor: 'black'},
    todoDescription: {marginLeft: 15},
    buttonText: {color: 'white', padding: 16, fontSize: 18},
    footerContainer: {position:'absolute', bottom:0, borderStyle: 'solid', borderColor: 'black', borderWidth: 5},
});

