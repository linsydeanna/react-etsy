import React, { Component } from 'react'
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router'
import App from './App'

class Listing extends Component {
  render() {
    return (
      <Link to={'/info/'+this.props.id}><div className="Listing">
        <p>{this.props.title}</p>
        <img src={this.props.image}/>
        <p>{this.props.price}</p>
      </div></Link>
    );
  }
}

export default Listing;
