import axios from 'axios';

import { FORM_RESPONSE } from './types';

const URL = "https://frosty-wood-6558.getsandbox.com:443/dishes";

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

export const createDish = (values, prepTime) => {

    let requestObj = {
        "name": values.name,
        "preparation_time": prepTime,
        "type": values.type
    }

    if (values.type === 'pizza'){
        requestObj.no_of_slices = parseInt(values.slicesPizza);
        requestObj.diameter = parseFloat(values.diameter);
    } else if (values.type === 'soup')
        requestObj.spiciness_scale = parseInt(values.spiciness);
    else
        requestObj.slices_of_bread = parseInt(values.slicesSandwich);
    console.log(requestObj);
    return async dispatch => {
        try {
            let {data} = await axios.post(URL, requestObj, axiosConfig);
            console.log(data);
            dispatch({type: FORM_RESPONSE, payload: data});
        } catch (err) {
            throw new Error('Ooops... something went wrong');
        }
    }
}