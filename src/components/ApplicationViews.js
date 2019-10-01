import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'

class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          {/* Make sure you add the `exact` attribute here */}
          <Route exact path="/animals" render={(props) => {
            return <AnimalList {...props}/>
            }} />
          <Route path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
            }} />
          <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} />
            }} />

          {/* routes for employees */}
          <Route exact path="/employee" render={(props) => {
            return <EmployeeList {...props}/>
            }} />
          <Route path="/employee/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
            }} />
          <Route path="/employee/new" render={(props) => {
            return <EmployeeForm {...props} />
            }} />

          {/* routes for location */}
          <Route exact path="/location" render={(props) => {
            return <LocationList />
            }} />
          <Route path="/location/:locationId(\d+)" render={(props) => {
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
            }} />

          {/* owner routes */}
          <Route exact path="/owner" render={(props) => {
            return <OwnerList />
          }} />
          <Route path="/owner/:ownerId(\d+)" render={(props) => {
            // Pass the locationId to the LocationDetailComponent
            return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
            }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews