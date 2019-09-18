import { ADD_USER_STARTED, ADD_USER_SUCCESS, ADD_USER_FAILURE } from '../actions/types';

const initialState = {
    users: [],
    error: null,
    loading: false
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_USER_STARTED:
            return {
                ...state,
                loading: true
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: [...state.users, action.payload]
            }
        case ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
