import React from 'react';
import {
    View,
    Button,
    SafeAreaView,
} from 'react-native';

const AddGoatButton = props => {

    return (
        <SafeAreaView style={props.style}>
            <View>
                <Button  onPress={() => props.navigation.navigate('AddGoatScreen')}
                         navigation={props.navigation}
                         title= {props.buttonTitle}
                         color="#841584"
                         accessibilityLabel="AddGoatScreen Page Button"
                />
            </View>
        </SafeAreaView>
    );
};

export default AddGoatButton;
