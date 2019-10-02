import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3><span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Pet ID: {this.props.owner.animalId}</p>
          <Link to={`/owner/${this.props.owner.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/owner/${this.props.owner.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;