import {API, graphqlOperation} from "aws-amplify";
import {getDoes, listDoes} from "../graphql/queries";
import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';

export async function fetchDoes(setDoes) {
    try {
        const doeData = await API.graphql(graphqlOperation(listDoes));
        const does = doeData.data.listDoes.items;
        setDoes(does);
    } catch (err) {
        console.log(err);
    }
}

/*export async function getDoe(id, setDoe) {
    try {
        const doeData = await API.graphql(graphqlOperation(getDoes(id)));
        const doe = doeData.data.getDoes.items;
        setDoe(doe);
    } catch (err) {
        console.log('error fetching todos');
    }
}*/

export async function getDoe(id, setDoe) {
    console.log(id);
    try {
        const doe = await API.graphql({
            query: queries.getDoes,
            variables: {id: id},
        })
        console.log('Before Set Doe')
        setDoe(doe);
        console.log('success');
    } catch (err) {
        console.log('error catching doe');
    }
}

export async function getDoeIDs(id, setIDs) {
    try {
        const doeData = await API.graphql(graphqlOperation(listDoes));
        const ids = doeData.data.listDoes.items.id;
        setIDs(ids);
    } catch (err) {
        console.log('error fetching todos');
    }
}

export async function createDoe(newDoeData) {
    try {
        console.log(newDoeData.name)
        const newDoe = await API.graphql({
            query: mutations.createDoes,
            variables: {input: newDoeData }
        });
    } catch (err) {
        console.log(err);
    }
}

/*
      id
      name
      description
      age
      height
      breed
      dob
      createdAt
      updatedAt
      __typename

      input: {
                name: doeData.name,
                id: doeData.id,
                description: doeData.description,
                age: doeData.age,
                height: doeData.height,
                breed: doeData.breed,
                dob: doeData.dob,
                createdAt: doeData.createdAt,
                updatedAt: doeData.updatedAt,
                __typename: doeData.__typename
                } */

export async function deleteDoe(doeData) {
    try {
        console.log(doeData);
        const deleteDoe = await API.graphql({
            query: mutations.deleteDoes,
            variables: {input: doeData }
        });
    } catch (err) {
        console.log(err);
    }
}
