import jwtDecode from 'jwt-decode';
import { AUTH_LOGIN, AUTH_LOGOUT } from './actions';

function initialState() {
    const common = { domains: [] };
    const token = localStorage.getItem('token') || null;
    if (token) {
        const { exp } = jwtDecode(token);
        const now = Math.floor(Date.now() / 1000);
        if (now > exp) {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return { ...common, user: null, token: null };
        }
    }
    return {
        ...common,
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: token,
    };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, user: action.payload.user, token: action.payload.token };

        case AUTH_LOGOUT:
            return { ...state, user: null, token: null };

        default:
            return state;
    }
};