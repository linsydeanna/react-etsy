import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import Rebase from 're-base';
import './login.css'


const base = Rebase.createClass({
      apiKey: "AIzaSyA38b7bucbaDcn2w8RnMql3bj5BhSF_wOg",
      authDomain: "react-etsy.firebaseapp.com",
      databaseURL: "https://react-etsy.firebaseio.com",
      storageBucket: "react-etsy.appspot.com",
  });

  class Login extends Component {
    constructor(){
      super();
      this.state = {
        users: []
      }
    }

    createUser(event) {
      event.preventDefault();
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      base.createUser({
      email, password
  }, this.handleCreatedUser);
      hashHistory.push('/home');
  }

  handleCreatedUser(error, authData) {
    let self = this
    console.log('auth data', authData);
    console.log('error', error);
    self.setState({
    users: {
      userId: authData.uid
    }
  })
    this.rebaseRef = base.syncState('users', {
      context: this,
      state: 'users',
      asArray: true,
})
    // this.props.setCurrentUser(authData);
  }

    render () {
      return (
        <div className="container">
        <form className="form-signin" onSubmit={this.createUser.bind(this)}>
        <input className="inputEmail form-control" type="email" placeholder="email" ref="email"/>
        <input className="form-control" type="password" placeholder="password" ref="password"/>
        <button className="btn btn-lg btn-danger" type="submit">Log in</button>
        </form>
        </div>
      )
    }
  }

  export default Login
