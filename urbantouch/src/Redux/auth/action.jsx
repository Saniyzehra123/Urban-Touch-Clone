// import Axios from 'axios';
import axios from "axios";

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export  const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

const siginInRequest = () => {
    return {
        type: SIGNIN_REQUEST
    }
}
const signInSuccess = (payload) => {
    return {
        type: SIGNIN_SUCCESS,
        payload
        // user
    }
}
const signInFailure = (payload) => {
    return {
        type: SIGNIN_FAILURE,
        payload
        // error
    }
}
 

export const signIn = (payload) => (dispatch) => {
    dispatch(siginInRequest());
     axios.post('https://ecom-backend-production-4249.up.railway.app/login',payload)
     //https://ecom-backend-production-4249.up.railway.app/login
    // https://urbantouchclone.herokuapp.com/login
   // .then(r =>  console.log(r))

    .then(r => dispatch(signInSuccess(r.data)))
    .catch(e =>
    // console.log(e))
   dispatch(signInFailure(e.data)));
}
 
