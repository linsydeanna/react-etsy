import React, { Component } from 'react'
import api_key from './config/api_key'
import Listing from './Listing'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import jsonp from 'jsonp'
import App from './App'

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    }
    this.getListing()
  }
  getListing () {
    let self = this
    const listing_id = this.props.params.id
      jsonp("https://openapi.etsy.com/v2/listings/" + listing_id + ".js?&api_key=" + api_key, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          console.log("data is", data);
          self.setState({
            listing: data.results[0]
          })
          console.log("state is", self.state)
        }
      });
  }

  render() {
    console.log("props are", this.props)
    return (
      <div className="Info">
        <p>TEST</p>
        <p>{this.state.listing.title}</p>
        <p>{this.state.listing.price}</p>
        <p>{this.state.listing.description}</p>
      </div>
    );
  }
}

export default Info;
