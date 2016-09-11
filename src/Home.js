import React, { Component } from 'react'
import Listing from './Listing'
import jsonp from 'jsonp'
import api_key from './config/api_key'

class Home extends Component {

constructor () {
  super ();
  this.state = {
    listings: []
  }
  this.returnListings = this.returnListings.bind(this)
}

  returnListings () {
    let self = this
    let terms = this.refs.search.value
      jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' + terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          console.log("data is", data);
          self.setState({
            listings: data.results
          })
          console.log("state is", self.state)
        }
      });
      console.log("button is working")
      console.log(this.refs.search.value)
  }

  render() {

    const items = this.state.listings.map((product) => {
    return (<Listing title={product.title} image={product.Images[0].url_75x75} price={product.price} key={product.listing_id} id={product.listing_id}/>)
  })

    return (
      <div className="Home form-signin">
        <input className="form-control" placeholder="search here" ref="search"/>
        <button className="btn btn-lg btn-danger" onClick={this.returnListings}>Search it!</button>
        <ul>
        {items}
        </ul>
      </div>
    );
  }
}

export default Home;
