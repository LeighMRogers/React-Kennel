import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employee"))
}

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        role: employee.role,
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
            <p>Role: {this.state.role}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Pink Slip</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;