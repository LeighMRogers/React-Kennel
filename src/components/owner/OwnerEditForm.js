import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
// import "./EmployeeForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      ownerName: "",
      animalId: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.ownerName,
        animalId: this.state.animalId
      };

      OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owner"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            ownerName: owner.name,
            animalId: owner.animalId,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalId"
                value={this.state.animalId}
              />
              <label htmlFor="animalId">Pet ID</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm