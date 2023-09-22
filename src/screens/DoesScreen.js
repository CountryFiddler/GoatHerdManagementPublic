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

const initialState = {name: '', description: ''};

const DoesScreen = () => {
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos));
            const todos = todoData.data.listTodos.items;
            setTodos(todos);
        } catch (err) {
            console.log('error fetching todos');
        }
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return;
            const todo = {...formState};
            setTodos([...todos, todo]);
            setFormState(initialState);
            await API.graphql(graphqlOperation(createTodo, {input: todo}));
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
                <Pressable onPress={addTodo} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Create todo</Text>
                </Pressable>
                {todos.map((todo, index) => (
                    <View key={todo.id ? todo.id : index} style={styles.todo}>
                        <Text style={styles.todoName}>{todo.name}</Text>
                        <Text style={styles.todoDescription}>{todo.description}</Text>
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
