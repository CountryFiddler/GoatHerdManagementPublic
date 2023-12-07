import React from 'react';
import {
    View,
    Button,
    SafeAreaView,
} from 'react-native';

const MaintenanceButton = props => {

    return (
        <SafeAreaView>
            <View>
                <Button  onPress={() => props.navigation.navigate('MaintenanceScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="DoesScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default MaintenanceButton;
