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

const signIn = (payload) => (dispatch) => {
    dispatch(siginInRequest());
     axios.post('/api/login', payload,{baseURL:'https://reqres.in'})

   // .then(r =>  console.log(r))

    .then(r => dispatch(signInSuccess(r.data)))
    .catch(e =>
    // console.log(e))
   dispatch(signInFailure(e.data)));
}
export {signIn}
