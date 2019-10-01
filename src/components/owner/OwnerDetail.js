import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerDetail extends Component {

  state = {
      name: "",
      animalId: "",
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        animalId: owner.animalId
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Pet ID: {this.state.animalId}</p>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;