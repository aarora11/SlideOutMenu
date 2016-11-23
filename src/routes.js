import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import PatientDetails from './components/patientDetails';
import PatientGraph from './components/patientGraphs';

import App from './components/app';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="signIn" component={Login}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="patient" component={PatientDetails}/>
        <Route path="patientDetails" component={PatientGraph} />
         
    </Route>
);