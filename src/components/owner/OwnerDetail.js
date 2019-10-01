import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerDetail extends Component {

  state = {
      name: "",
      animalId: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owner"))
}

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        animalId: owner.animalId,
        loadingStatus: false
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
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;