import { combineReducers } from "redux";
import BookReducer from "./bookreducer";

export default combineReducers({
    bookData: BookReducer
});