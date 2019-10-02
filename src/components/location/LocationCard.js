import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3><span className="card-locationname">{this.props.localBiz.name}</span></h3>
          <p>Address: {this.props.localBiz.address}</p>
          <Link to={`/location/${this.props.localBiz.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/location/${this.props.localBiz.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.localBiz.id)}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;