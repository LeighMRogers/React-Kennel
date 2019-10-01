import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'

class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          {/* Make sure you add the `exact` attribute here */}
          <Route exact path="/animals" render={(props) => {
            return <AnimalList />
            }} />
          <Route path="/animals/:animalId(\d+)" render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
            }} />
          <Route exact path="/employee" render={(props) => {
            return <EmployeeList />
            }} />
          <Route path="/employee/:employeeId(\d+)" render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
            }} />
          <Route exact path="/location" render={(props) => {
            return <LocationList />
            }} />
          <Route path="/location/:locationId(\d+)" render={(props) => {
            // Pass the locationId to the LocationDetailComponent
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
            }} />
          <Route path="/owner" render={(props) => {
            return <OwnerList />
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews