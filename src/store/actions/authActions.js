import axios from 'axios';

import { ADD_USER_STARTED, ADD_USER_SUCCESS, ADD_USER_FAILURE } from './types';

const apiUrl = 'https://quickcredit-heroku.herokuapp.com/api/v1/auth/signup';

// this action receives the user as payload
export const signupUser = (user) =>  {
    // return a function that takes in dispatch 
    return (dispatch, getState) => {
        dispatch(signUpStarted());
        // make async call to the endpoint here before dispathcing the action to the reducer
        axios.post(apiUrl, user)
        .then((response) => {
            // console.log('response from endpoint', response)
            dispatch(signUpSuccess(response.data))
        })
        .catch(error => {
            dispatch(signUpFailure(error.message));
        })
    }
}

export const signUpStarted = () => ({
    type: ADD_USER_STARTED
})

export const signUpSuccess = user => ({
    type: ADD_USER_SUCCESS,
    payload: {
        ...user
    }
});

export const signUpFailure = error => ({
    type: ADD_USER_FAILURE,
    payload: {
        error
    }
});
