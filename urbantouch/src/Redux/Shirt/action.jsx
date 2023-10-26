import * as types from '../ActionTypes/actionTypes';
import axios from 'axios';

export const getShirt = (payload) => ({
    type:types.GET_SHIRT,
    payload
});

export const getShirtSuccess = (payload)=> ({
    type: types.GET_SHIRT_SUCCESS,
    payload
   
});

export const getShirtFailure = (payload)=> ({
    type: types.GET_SHIRT_FAILURE,
    payload
});
export const getShirtData =(payload)=>{
    return (dispatch) => {
        dispatch(getShirt());
        axios.get(`https://nice-blue-zebra-hose.cyclic.app/api/shirt`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getShirtSuccess(response.data));
               // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getShirtFailure(error));
            }
        );
    }
    }

    // https://coral-tick-wear.cyclic.app/api/shirts

    // https://urbantouchclone.herokuapp.com/products2