import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Breed: {this.props.owner.breed}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;