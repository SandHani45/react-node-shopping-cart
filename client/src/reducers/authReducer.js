import { 
    LOGIN_USER,
    AUTH_USER,
    LOGOUT_USER
 } from '../actions/type';
import isEmpty from './../validation/is-empty';

const initialState = {
    isAuthenticated : false,
    user:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user:action.payload
            }
        case AUTH_USER:
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user:action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated : false,
                user:action.payload
            }        
        default:
            return state; 
    }
}