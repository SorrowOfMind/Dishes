import { FORM_RESPONSE } from "../actions/types";


const dishReducer = (state = {}, action) => {
    switch (action.type){
        case FORM_RESPONSE:
            if (action.payload.id)
                return {...state, response: action.payload, message: "Dish was successfully registered", status: 1};
            else 
                return {...state, errors: action.payload, messege: "Registering failed", status: 0};
        default:
            return state;
    }
}

export default dishReducer;