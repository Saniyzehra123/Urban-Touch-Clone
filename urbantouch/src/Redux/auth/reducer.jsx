
 
import {SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE} from './action';

const initialState = {
    auth : false ,
    token:'',
    error:false,
    // userId:"",
    // name:""
}

const reducer = (state = initialState, action) => {  

const {type, payload} = action;
 switch(type) {
    case SIGNIN_REQUEST:
        return {
            ...state,
            auth : false,
            
            error:false,

 }
    case SIGNIN_SUCCESS:
        return {
            ...state,
            auth : true,
            token: payload.token,
            
            error:false,
          
        }
    case SIGNIN_FAILURE:
        return {
            ...state,
            auth : false,
            token:'',
        }
 

  default : 
    return state;
}
}
export default reducer;