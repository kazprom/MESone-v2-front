import { GraphQLClient } from 'graphql-request';

export const client = () => new GraphQLClient(process.env.REACT_APP_GRAPHQL_URL, {
    headers: setHeaders(),
});

function setHeaders() {
    const token = localStorage.getItem('token');
    return (token) ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : {};
}