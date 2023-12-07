import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,

} from 'react-native';
import Card from "./Card";

const CardList = props => {

    return (
        <SafeAreaView>
            <View style={styles.cardContainer}>
                {props.goats.map((goat, index) => (
                    <View key={goat.id ? goat.id : index}>
                        <Card goat={goat} navigation={props.navigation}/>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default CardList;
const styles = StyleSheet.create({
    container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
    todo: {marginBottom: 15},
    input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
    todoName: {fontSize: 20, fontWeight: 'bold'},
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 8,
    },
    buttonText: {color: 'white', padding: 16, fontSize: 18},
    cardContainer: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'},
});
