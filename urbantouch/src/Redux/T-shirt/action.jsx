import * as types from '../ActionTypes/actionTypes';
import axios from 'axios';

export const getTShirt = (payload) => ({
    type:types.GET_TSHIRT,
    payload
});

export const getTShirtSuccess = (payload)=> ({
    type: types.GET_TSHIRT_SUCCESS,
    payload
   
});

export const getTShirtFailure = (payload)=> ({
    type: types.GET_TSHIRT_FAILURE,
    payload
});
export const getTShirtData =(payload)=>{
    return (dispatch) => {
        dispatch(getTShirt());
        axios.get(`https://nice-blue-zebra-hose.cyclic.app/api/tshirt`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getTShirtSuccess(response.data));
               // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getTShirtFailure(error));
            }
        );
    }
    }