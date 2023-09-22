/*import {Component} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";



const DoesScreen = props => {

    return (
        <View >
            <Text>
                Does

            </Text>
        </View>
    );
};

export default DoesScreen;*/

import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView,
} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {createTodo} from '../graphql/mutations'
import {listTodos} from '../graphql/queries';
import {createDoes} from "../graphql/mutations";
import {listDoes} from "../graphql/queries";
import {fetchDoes} from "../functions/DoeFunctions";
import CardList from "../components/CardList";

const initialState = {name: '', description: '', age: '', height: '', breed: '', dob: ''};

const DoesScreen = props => {
    const [formState, setFormState] = useState(initialState);
    const [does, setDoes] = useState([]);

    useEffect(() => {
        fetchDoes(setDoes);
    }, []);

    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }

    /*async function fetchDoes() {
        try {
            const doeData = await API.graphql(graphqlOperation(listDoes));
            const does = doeData.data.listDoes.items;
            setDoes(does);
        } catch (err) {
            console.log('error fetching todos');
        }
    }*/

    /*async function addDoes() {
        try {
            if (!formState.name || !formState.description) return;
            const doe = {...formState};
            setDoes([...does, doe]);
            setFormState(initialState);
            await API.graphql(graphqlOperation(createDoes, {input: doe}));
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }*/

    return (
        <SafeAreaView style={styles.container}>
            <CardList goats={does} navigation={props.navigation}/>
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
