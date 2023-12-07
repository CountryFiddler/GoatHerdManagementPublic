import  {useEffect, useState} from 'react';
import * as React from 'react';
import {useIsFocused} from '@react-navigation/native'



import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';

import {fetchDoes} from "../functions/DoeFunctions";
import CardList from "../components/CardList";
import AddGoatButton from "../components/Buttons/AddGoatButton";



const initialState = {name: '', description: '', age: '', height: '', breed: '', dob: ''};

const DoesScreen = props => {
    const [formState, setFormState] = useState(initialState);
    const [does, setDoes] = useState([]);
    const isFocused = useIsFocused();



    useEffect(() => {
        console.log('Re-Rendered')
        console.log('Re-Rendered 1')
            // The screen is focused
            // Call any action and update data
        if (isFocused) {
            fetchDoes(setDoes)
        }
    }, [isFocused]);



    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <AddGoatButton buttonTitle={"Add"} navigation={props.navigation} typeName={'does'}/>
                <CardList goats={does} navigation={props.navigation}/>
            </View>
        </SafeAreaView>
    );
};

export default DoesScreen;

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
});
