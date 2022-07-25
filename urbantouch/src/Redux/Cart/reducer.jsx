import * as types from '../Newarrival/actionTypes';

const initialState = {
    cart:[],
    loading:false,
    error:false,
}

const cartreducer = (state = initialState, action) => { 'reducer'
const {type, payload} = action;
 switch(type) {
case types.  ADD_PRODUCT_CART_REQUEST:
    return {
        ...state,
        error: '',
        loading: true
    }
case types.  ADD_PRODUCT_CART_SUCCESS:
    return {
        ...state,
    
        error: '',
        cart: [...state.cart, payload],
        loading: false
    }
case types. ADD_PRODUCT_CART_FAILURE:
    return {
        ...state,
        error: payload,
        loading: false
    }
    default:
        return state;
}
}

export default  cartreducer;