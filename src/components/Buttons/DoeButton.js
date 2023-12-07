import React from 'react';
import {
    View,
    Button,
    SafeAreaView,
} from 'react-native';

const DoeButton = props => {

    return (
        <SafeAreaView style={props.style}>
            <View>
                <Button  onPress={() => props.navigation.navigate('DoesScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="DoesScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default DoeButton;
