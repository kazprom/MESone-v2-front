import { GraphQLClient } from 'graphql-request';

const url = process.env.REACT_APP_API_URL || window.location.origin;

export const client = () => new GraphQLClient(url + process.env.REACT_APP_GRAPHQL_URL, {
    headers: setHeaders(),
});

function setHeaders() {
    const token = localStorage.getItem('token');
    return (token) ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : {};
}