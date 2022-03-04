import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import dishReducer from "./dishReducer";

const rootReducer = combineReducers({
    dish: dishReducer,
    form: formReducer
});

export default rootReducer;