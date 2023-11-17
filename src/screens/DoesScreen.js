import  {useEffect, useState} from 'react';
import * as React from 'react';
import {useIsFocused} from '@react-navigation/native'



import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView, TouchableOpacity,
} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {createTodo} from '../graphql/mutations'
import {listTodos} from '../graphql/queries';
import {createDoes} from "../graphql/mutations";
import {listDoes} from "../graphql/queries";
import {fetchDoes} from "../functions/DoeFunctions";
import CardList from "../components/CardList";
import AddGoatButton from "../components/Buttons/AddGoatButton";



const initialState = {name: '', description: '', age: '', height: '', breed: '', dob: ''};

const DoesScreen = props => {
    const [formState, setFormState] = useState(initialState);
    const [does, setDoes] = useState([]);
    //const navigation = props.navigation;
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
