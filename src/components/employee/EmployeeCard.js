import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3><span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Role: {this.props.employee.role}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Pink Slip</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;