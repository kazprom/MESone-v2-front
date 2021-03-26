import { client } from './client';
import { gql } from 'graphql-request';

export function installerGetEnv(props) {
    let variables = {keys:props};
    const query = gql`query (
        $keys: [String!]
    ){
        installerGetEnv(
            keys: $keys
        )
    }`;
    return client().request(query, variables)
        .then(data => data?.['installerGetEnv'])
        .catch(error => ({ error: error.message }));
}

export function installerSetEnv(props) {
    let variables = {json:props};
    const query = gql`mutation (
        $json: String!
    ){
        installerSetEnv(
            json: $json
        )
    }`;
    return client().request(query, variables)
        .then(data => data?.['installerSetEnv'])
        .catch(error => ({ error: error.message }));
}

export function installerRegenKeys() {
    const query = gql`mutation {
        installerRegenKeys
    }`;
    return client().request(query)
        .then(data => data?.['installerRegenKeys'])
        .catch(error => ({ error: error.message }));
}

export function databaseGetAvailableDrivers() {
    const query = gql`query {
        databaseGetAvailableDrivers
    }`;
    return client().request(query)
        .then(data => data?.['databaseGetAvailableDrivers'])
        .catch(error => ({ error: error.message }));
}

export function installerCheckDbConnection() {
    const query = gql`query {
        installerCheckDbConnection
    }`;
    return client().request(query)
        .then(data => data?.['installerCheckDbConnection'])
        .catch(error => ({ error: error.message }));
}
