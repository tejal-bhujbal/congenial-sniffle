import * as types from '../../common';
import initialState from './initialState';






const userReducer = (state = initialState.userData, action) => {
    switch(action.type){
        case types.USER_SIGN_IN_STARTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.USER_SIGN_IN_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                userSignInRes: action.userSignInRes
            };
        case types.USER_SIGN_IN_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                userSignInError: action.userSignInError
            };
        case types.GET_ALL_USERS_STARTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_ALL_USERS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                getAllUsersRes: action.getAllUsersRes
            }
        case types.GET_ALL_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                getAllUsersError: action.getAllUsersError
            }
        default:
            return state;
    }
}

export default userReducer;