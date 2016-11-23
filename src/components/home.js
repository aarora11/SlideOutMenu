import React , {Component} from 'react';
import { Link } from 'react-router';

export default class Home extends Component{
    render(){
        return(
<p className = "tpbutton btn-toolbar text-align:center shift" >
     <Link className = "btn navbar-btn btn-primary" to={"signIn"} >SignIn</Link>
     <Link className = "btn navbar-btn btn-default" to={"signUp"} >SignUp</Link>
</p>
        );
    }
}