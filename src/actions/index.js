import axios from 'axios';
import {browserHistory} from 'react-router';

export const SIGN_IN = 'SIGN_IN';
export const PATIENTS = 'PATIENTS';
export const PATIENT_DETAILS = "PATIENT_DETAILS";
export function signIn(){
    console.log("firing the action");
    const request = axios.get(`http://localhost:8000/GraphQL/webresources/myresource/login`);
    return {
        type : SIGN_IN,
        payload : request
    }
}

export function patientCounter() {

   
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`);
      return {
        type : PATIENTS,
        payload : request
    }

}

export function searchPatientData(){
   
    return {
        type : PATIENT_DETAILS
        
    }
    //
    // this.props.dispatch(registerStep1Success())
    // browserHistory.push('/registrationStep2')
    //
    // return function (dispatch){
    //
    // }



}