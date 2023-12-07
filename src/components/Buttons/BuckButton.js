import React from 'react';
import {
    View,
    Button,
    SafeAreaView,
} from 'react-native';

const BuckButton = props => {

    return (
        <SafeAreaView>
            <View>
                <Button  onPress={() => props.navigation.navigate('BucksScreen')}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="BucksScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default BuckButton;
