import React, { Component } from 'react'
import api_key from './config/api_key'
import Rebase from 're-base';
import {Link} from 'react-router'
import jsonp from 'jsonp'

const base = Rebase.createClass({
    apiKey: "AIzaSyB5n-eyFjG7ci0p1bGJpIMKQCPxDY5vS14",
    authDomain: "login-app-2c048.firebaseapp.com",
    databaseURL: "https://login-app-2c048.firebaseio.com",
    storageBucket: "login-app-2c048.appspot.com",
  });

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      list: []
    }
    this.getListing()
    this.addToWishList = this.addToWishList.bind(this)
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
            listing: data.results[0],
          })
          console.log("state is", self.state)
        }
      });
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('list', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({loading:false})
      }
    })
  }

  addToWishList (event) {
    event.preventDefault();
    let list = this.state.list
    let item = this.state.listing.title
    this.setState({
      list: [...list, item]
    })
    console.log("list is", list)
  }

  render() {

    console.log("props are", this.props)
    return (
      <div className="Info">
        <p>TEST</p>
        <p>{this.state.listing.title}</p>
        <p>{this.state.listing.price}</p>
        <p>{this.state.listing.description}</p>
        <button className="btn btn-lg btn-danger" onClick={this.addToWishList}>Add to Wish List</button>
        <Link to="/wishlist"><button className="btn btn-lg btn-danger">View my WishList</button></Link>

      </div>
    );
  }
}

export default Info;
