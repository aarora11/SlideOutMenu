import React, { Component } from 'react';
import Login from './login';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <div>
      {this.props.children }
      </div>
    );
  }
}
