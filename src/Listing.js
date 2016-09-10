import React, { Component } from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'

class Listing extends Component {
  render() {
    return (
      <div className="Listing">
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Listing;
