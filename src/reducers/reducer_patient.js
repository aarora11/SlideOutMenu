import {PATIENTS, PATIENT_DETAILS} from '../actions/index';

export default function(state = [], action){
     console.log(action.type);
    switch(action.type){
        case PATIENTS:
        return [...state, ...action.payload.data];
        case PATIENT_DETAILS:
            return [...state]
    }
    return state;
}