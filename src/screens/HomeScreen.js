import {Component} from "react";
import {Text, View} from "react-native";
import DoeButton from "../components/Buttons/DoeButton"
import BuckButton from "../components/Buttons/BuckButton";
import KiddingScheduleButton from "../components/Buttons/KiddingScheduleButton";
import MaintenanceButton from "../components/Buttons/MaintenanceButton";
import Footer from "../components/Footer"
import {DoesScreen} from "./src/screens/DoesScreen";

export class HomeScreen extends Component {
    render() {
        return (
            <View >
                <View>
                <DoeButton navigation={this.props.navigation} buttonTitle={'Does'}/>
                <BuckButton navigation={this.props.navigation} buttonTitle={'Bucks'}/>
                <KiddingScheduleButton navigation={this.props.navigation} buttonTitle={'Kidding Schedule'}/>
                <MaintenanceButton navigation={this.props.navigation} buttonTitle={'Maintenance'}/>
                </View>
                <View>
                    <Footer navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}
