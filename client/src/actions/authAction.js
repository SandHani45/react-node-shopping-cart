import axios from 'axios';

import{ USER_SERVER } from '../components/utiles/Routes'
import { 
    LOGIN_USER,
    AUTH_USER,
    LOGOUT_USER 
} from './type';

export const loginUser = (userData) => dispatch=>{
    axios
        .post(`${USER_SERVER}/login`, userData)
        .then(res => 
            dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    )
};

export const registerUser = (newUser, history) => dispatch => {
  axios
    .post(`${USER_SERVER}/register`, newUser)
    .then(res =>setTimeout(() => {
        history.push("/login")
    }, 3000))
    .catch(err =>
      dispatch({
        type: LOGIN_USER,
        payload: err.response.data
      })
    );
};
 export const authCheckAction = () =>{
     const request = axios
                        .get(`${USER_SERVER}/auth`)
                        .then(res=>res.data)
        return {
            type:AUTH_USER,
            payload:request
        }                
 }
 export const logOutAction = () => {
    const request = axios.get( `${USER_SERVER}/logout`)
                          .then(res=>res.data);
        return {
            type:LOGOUT_USER,
            payload:request
        }                    
 }