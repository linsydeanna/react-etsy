import React, { Component } from 'react'
import {Link} from 'react-router'

class Listing extends Component {
  render() {
    return (
      <Link to={'/info/'+this.props.id}><div className="Listing">
        <p>{this.props.title}</p>
        <img src={this.props.image} alt="listing"/>
        <p>{this.props.price}</p>
      </div></Link>
    );
  }
}

export default Listing;
