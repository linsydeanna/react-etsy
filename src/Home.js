import React, { Component } from 'react'
import axios from 'axios'
import jsonp from 'jsonp'
import api_key from './config/api_key'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'

class Home extends Component {

constructor () {
  super ();
  this.state = {
    listings: []
  }
  this.returnListings = this.returnListings.bind(this)
}

  returnListings () {
    let terms = this.refs.search.value
    axios.get('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key)
    .then((response) => {
      console.log("response is", response);
    })
    console.log("button is working")
    console.log(this.refs.search.value)

    jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("data is", data);
      this.setState ({
        listings: data.results
      })
      console.log("state is", this.state)
    }
      // return this.state.listings.map((product) => {
      //   return (<Listing title={product.title} key={product.id}/>)
// }
  });
}

  render() {
    // const listings = this.returnListings();

    return (
      <div className="Home">
      <input placeholder="search here" ref="search"/>
      <button onClick={this.returnListings.bind(this)}>Search it!</button>
      </div>
    );
  }
}

export default Home;
