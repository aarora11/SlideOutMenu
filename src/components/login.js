import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../actions/index';
class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

 static contextTypes = {
        router : PropTypes.object
    };
   

    onUserNameChange(event){
        this.setState({
            username : event.target.value
        })
        
    }
    onPasswordChange(event){
        this.setState({
            password : event.target.value
        })
        
    }

    onFormSubmit(event){
		event.preventDefault();
		console.log("FormSubmitted");
        // this.props.signIn()
		//We need to go and fetch weather data
		 this.context.router.push('dashboard');
	}
    
    render(){
        return(
            
    <div className="container shift">

      <form className="form-signin" onSubmit={this.onFormSubmit.bind(this)}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" onChange={this.onUserNameChange.bind(this)} id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" onChange={this.onUserNameChange.bind(this)} className="form-control" placeholder="Password" required></input>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div> 


        );
    }
}


function  mapDispatchToProps(dispatch) {
    return bindActionCreators({signIn}, dispatch);
}

export default connect(null, mapDispatchToProps) (Login);
