import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router'
import Rebase from 're-base';

const base = Rebase.createClass({
      apiKey: "AIzaSyA38b7bucbaDcn2w8RnMql3bj5BhSF_wOg",
      authDomain: "react-etsy.firebaseapp.com",
      databaseURL: "https://react-etsy.firebaseio.com",
      storageBucket: "react-etsy.appspot.com",
  });

  class Login extends Component {

    createUser(event) {
      event.preventDefault();
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      base.createUser({
      email, password
  }, this.handleCreatedUser);
  }

  handleCreatedUser(error, authData) {
    console.log('auth data', authData);
    console.log('error', error);
    // this.props.setCurrentUser(authData);
  }

    render () {
      return (
        <form onSubmit={this.createUser.bind(this)}>
        <input placeholder="email" ref="email"/>
        <input placeholder="password" ref="password"/>
        <Link to="/home"><button type="submit">Log in</button></Link>
        </form>
      )
    }
  }

  export default Login
