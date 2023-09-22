import {API, graphqlOperation} from "aws-amplify";
import {listDoes} from "../graphql/queries";

export async function fetchDoes(setDoes) {
    try {
        const doeData = await API.graphql(graphqlOperation(listDoes));
        const does = doeData.data.listDoes.items;
        setDoes(does);
    } catch (err) {
        console.log('error fetching todos');
    }
}
