import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import DoeButton from "../components/Buttons/DoeButton"
import BuckButton from "../components/Buttons/BuckButton";
import KiddingScheduleButton from "../components/Buttons/KiddingScheduleButton";
import MaintenanceButton from "../components/Buttons/MaintenanceButton";
import Footer from "../components/Footer"
import {DoesScreen} from "./src/screens/DoesScreen";

export class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <DoeButton style={styles.button} navigation={this.props.navigation} buttonTitle={'Does'}/>
                <BuckButton navigation={this.props.navigation} buttonTitle={'Bucks'}/>
                </View>
                <View style={styles.buttonContainer}>
                <KiddingScheduleButton navigation={this.props.navigation} buttonTitle={'Kidding Schedule'}/>
                <MaintenanceButton navigation={this.props.navigation} buttonTitle={'Maintenance'}/>
                </View>

                <Footer style={styles.footerContainer} navigation={this.props.navigation}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {margin: '2%', height: '95%', borderStyle: 'solid', borderColor: 'black', borderWidth: 5},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold', marginLeft: 15},
    buttonContainer: {
        alignSelf: 'center',
        //backgroundColor: 'black',
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    button: {width: 75, height: 35, backgroundColor: 'black'},
    todoDescription: {marginLeft: 15},
    buttonText: {color: 'white', padding: 16, fontSize: 18},
    //cardContainer: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'},
    footerContainer: {position:'absolute', bottom:0, borderStyle: 'solid', borderColor: 'black', borderWidth: 5, flexDirection: 'row'},
});
