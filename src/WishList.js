import React, { Component } from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Rebase from 're-base';
import App from './App'
import Info from './Info'


const base = Rebase.createClass({
    apiKey: "AIzaSyB5n-eyFjG7ci0p1bGJpIMKQCPxDY5vS14",
    authDomain: "login-app-2c048.firebaseapp.com",
    databaseURL: "https://login-app-2c048.firebaseio.com",
    storageBucket: "login-app-2c048.appspot.com",
  });

class WishList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    base.bindToState('list', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({
          loading:false
        })
      }
    })
  }

  render() {
    console.log("wishlist state is", this.state)
    console.log("wishlist list is", this.state.list)
    return (
      <div className="WishList">
      <ul>
        {this.state.loading === false &&
      this.state.list.map((addedItem, index) => {
        return <li key={index}>{addedItem}</li>
      })
    }
      </ul>
      </div>
    );
  }
}

export default WishList;
