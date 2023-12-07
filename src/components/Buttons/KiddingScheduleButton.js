import React from 'react';
import {
    View,
    Button,
    SafeAreaView,
} from 'react-native';

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
