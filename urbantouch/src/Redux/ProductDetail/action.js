import axios from "axios";
import * as types from "./actionTypes";


export const getNewArrival = (payload) => ({
    type:types.ADD_PRODUCT_DETAILS_CART_REQUEST,
    payload
});

export const getNewArrivalSuccess = (payload)=> ({
    type: types.ADD_PRODUCT_DETAILS_CART_SUCCESS,
    payload
   
});

export const getNewArrivalFailure = (payload)=> ({
    type: types.ADD_PRODUCT_DETAILS_CART_FAILURE,
    payload
});

export const getMensData =(payload)=>{
    return (dispatch) => {
        dispatch(getNewArrival());
        axios.get(`https://nice-blue-zebra-hose.cyclic.app/api/shirt`,{
            params:{
                ...payload,
            }
        })
            .then(response => {
                dispatch(getNewArrivalSuccess(response.data));
               // console.log("raj",response.data);
            }).catch(error => {
                dispatch(getNewArrivalFailure(error));
            }
        );
    }
    }