import React, {useState} from 'react';
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
