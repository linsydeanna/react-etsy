import React, { Component } from 'react'
import axios from 'axios'
import jsonp from 'jsonp'
import api_key from './config/api_key'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'

class Home extends Component {

  terms () {
    let terms = this.refs.search.value
    axios.get('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key)
    .then(function (response) {
      console.log(response);
    })
    console.log("button is working")
    console.log(this.refs.search.value)

    jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
    if (err) {7
      console.error(err.message);
    } else {
      console.log(data);
    }
  });
  
  }

  render() {
    return (
      <div className="Home">
      <input placeholder="search here" ref="search"/>
      <button onClick={this.terms.bind(this)}>Search it!</button>
      </div>
    );
  }
}

export default Home;
