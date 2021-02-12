import { LOADER_TOGGLE, MESSAGE_SET_LIST } from './actions';

const initialState = {
    isLoading: false,
    messages: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_TOGGLE:
            return { ...state, isLoading: action.payload };

        case MESSAGE_SET_LIST:
            return { ...state, messages: action.payload };

        default:
            return state;
    }
}