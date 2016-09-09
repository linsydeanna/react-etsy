import React, { Component } from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Login from './Login';
import Home from './Home';
import Info from './Info';
import WishList from './WishList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
