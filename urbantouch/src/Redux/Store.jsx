import {  legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { newarrivalreducer } from "./Newarrival/reducer";
import { shirtreducer } from "./Shirt/reducer";
import { tshirtreducer } from "./T-shirt/reducer";
import { trouserreducer } from "./Trouser/reducer";
import { denimsreducer } from "./Denims/reducer";
 
import {shortreducer } from "./Shorts/reducer";
import {sweaterSreducer} from "./Sweaters/reducer";
import reducer from "./auth/reducer";
import { signupreducer } from "./Siginup/reducer";
import cartreducer from "./Cart/reducer";
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    
const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const rootReducer = combineReducers({
    newarrivalreducer,
    shirtreducer,
    tshirtreducer,
    trouserreducer,
    denimsreducer,
    sweaterSreducer,
    shortreducer ,
   reducer,
   signupreducer,
   cartreducer
});
export const store =  legacy_createStore(rootReducer, enhancer);