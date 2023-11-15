import {Component} from "react";
import {Button, SafeAreaView, Text, TextComponent, TextInput, View} from "react-native";
import {useState} from "react/index";
import {createDoe} from "../functions/DoeFunctions";

/*
      name
      description
      age
      height
      breed
      dob
 */


const AddGoatScreen = props => {

    const [typeName, setTypeName] = useState(props.typeName);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [breed, setBreed] = useState('');
    const [dob, setDob] = useState('');
    //const [goatData, setGoatData] = useState('');
    const goatData = {
        name: name,
        description: description,
        age: age,
        height: height,
        breed: breed,
        dob: dob,
        __typename: props.typeName,
    }

    return (
        <View >
            <Text>
                Add Goat Screen
            </Text>
            <Text > Name: </Text>
            <TextInput
                placeholder={' Name'}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text > Description: </Text>
            <TextInput
                placeholder={' Description'}
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <Text > Age: </Text>
            <TextInput
                placeholder={' Age'}
                value={age}
                onChangeText={text => setAge(text)}
            />
            <Text > Height: </Text>
            <TextInput
                placeholder={' Height'}
                value={height}
                onChangeText={text => setHeight(text)}
            />
            <Text > Breed: </Text>
            <TextInput
                placeholder={' Breed'}
                value={breed}
                onChangeText={text => setBreed(text)}
            />
            <Text > Date of Birth: </Text>
            <TextInput
                placeholder={' Date of Birth'}
                value={dob}
                onChangeText={text => setDob(text)}
            />
            <Button
                onPress={() => {
                    createDoe(goatData);
                    props.navigation.navigate('DoesScreen')
                }} title={'Submit'}>
            </Button>
        </View>
    );
};

export default AddGoatScreen;
