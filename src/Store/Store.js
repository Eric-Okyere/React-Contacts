import {createStore} from "redux"
import contactReducer from "../reducers/contactReducer"



let Store= createStore(contactReducer);

export default Store;