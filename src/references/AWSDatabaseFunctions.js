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

const initialState = {name: '', description: '', age: '', height: '', breed: '', dob: ''};

const DoesScreen = () => {
    const [formState, setFormState] = useState(initialState);
    const [does, setDoes] = useState([]);

    useEffect(() => {
        fetchDoes();
    }, []);

    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }

    async function fetchDoes() {
        try {
            const doeData = await API.graphql(graphqlOperation(listDoes));
            const does = doeData.data.listDoes.items;
            setDoes(does);
        } catch (err) {
            console.log('error fetching todos');
        }
    }

    async function addDoes() {
        try {
            if (!formState.name || !formState.description) return;
            const doe = {...formState};
            setDoes([...does, doe]);
            setFormState(initialState);
            await API.graphql(graphqlOperation(createDoes, {input: doe}));
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    onChangeText={value => setInput('name', value)}
                    style={styles.input}
                    value={formState.name}
                    placeholder="Name"
                />
                <TextInput
                    onChangeText={value => setInput('description', value)}
                    style={styles.input}
                    value={formState.description}
                    placeholder="Description"
                />
                <TextInput
                    onChangeText={value => setInput('age', value)}
                    style={styles.input}
                    value={formState.age}
                    placeholder="Age"
                />
                <TextInput
                    onChangeText={value => setInput('height', value)}
                    style={styles.input}
                    value={formState.height}
                    placeholder="Height"
                />
                <TextInput
                    onChangeText={value => setInput('breed', value)}
                    style={styles.input}
                    value={formState.breed}
                    placeholder="Breed"
                />
                <TextInput
                    onChangeText={value => setInput('dob', value)}
                    style={styles.input}
                    value={formState.dob}
                    placeholder="DOB"
                />
                <Pressable onPress={addDoes} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Create Doe</Text>
                </Pressable>
                {does.map((doe, index) => (
                    <View key={doe.id ? doe.id : index} style={styles.todo}>
                        <Text style={styles.todoName}>{doe.name}</Text>
                        <Text style={styles.todoDescription}>{doe.description}</Text>
                        <Text style={styles.todoDescription}>{doe.age}</Text>
                    </View>
                ))}
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
