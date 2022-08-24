import {createStore} from "redux"
import contactReducer from "../Reducers/contactReducer"


let Store=createStore(contactReducer)

export default Store;