import { client } from './client';
import { gql } from 'graphql-request';

export function loginRequest({ login, password, domain = null, remember = false }) {
    let variables = { login, password, domain, remember };
    const query = gql`query (
        $login: String!,
        $password: String!,
        $domain: Int,
        $remember: Boolean,
    ){
        authLogin(
            login: $login,
            password: $password,
            domain_id: $domain,
            remember: $remember
        ){
            id
            first_name
            last_name
            second_name
            login
            token
            avatar
            domain_id
            structure_enterprise_id
            is_admin
        }
    }`;
    return client().request(query, variables)
        .then(data => data)
        .catch(error => console.error('loginRequest', error));
}

export function logoutRequest() {
    const query = gql`query {
        authLogout {
            id
        }
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('loginRequest', error));
}

export function refreshTokenRequest() {
    const query = gql`query {
        authRefreshToken
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('refreshTokenRequest', error));
}
