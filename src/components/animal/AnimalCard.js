import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>

          {/* Example of how to add photos dynamically (photos stored in same directory) */}
          {/* <img src={require(`./Images/${this.props.animal.url}`)} alt="My Dog" />

          what structure looks like in JSON
          {
            "id": 2,
            "name": "Decker",
            "breed": "German Sheperd",
            "url": "2.jpg"
          } */}

          <h3><span className="card-petname"> {firstLetterCase(this.props.animal.name)}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;