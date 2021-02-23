import { client } from './client';
import { gql } from 'graphql-request';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ queryInitData ~~~ */

export function queryInitData() {
    const query = gql`query {
        domains {
            id
            name
            description
            enabled
        }
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('queryInitData', error));
}