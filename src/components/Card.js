import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const Card = props => {

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
