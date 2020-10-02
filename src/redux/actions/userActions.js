import * as types from '../../common';

const userSignInStarted = () => ({
    type: types.USER_SIGN_IN_STARTED
});

const userSignInSucceeded = (res) => ({
    type: types.USER_SIGN_IN_SUCCEEDED,
    userSignInRes: res
});

const userSignInFailed = (error) => ({
    type: types.USER_SIGN_IN_FAILED,
    userSignInError: error
});

export const userSignIn = (req) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    return function(dispatch){
        dispatch(userSignInStarted());
        return fetch('http://localhost:5033/user/signIn', requestOptions)
        .then(res => res.json())
        .then(
            (res) => {
                dispatch(userSignInSucceeded(res))
            },
            (error) => {
                dispatch(userSignInFailed(error))
            }
        );
    }
}

const getAllUsersStarted = () => ({
    type: types.GET_ALL_USERS_STARTED
})
const getAllUsersSucceeded = (res) => ({
    type: types.GET_ALL_USERS_SUCCEEDED,
    getAllUsersRes: res
})
const getAllUsersFailed = (error) => ({
    type: types.GET_ALL_USERS_FAILED,
    getAllUsersError: error
})
export const getAllUsers = () => {
    return function(dispatch){
        dispatch(getAllUsersStarted());
        return fetch('http://localhost:5033/user')
            .then(res => res.json())
            .then(
                (res) => {
                    dispatch(getAllUsersSucceeded(res));
                },
                (error) => {
                    dispatch(getAllUsersFailed(error));
                }
            )
    }
}