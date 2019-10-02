import { Route, Redirect } from 'react-router-dom'
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
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationEditForm from './location/LocationEditForm'

class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          {/* Make sure you add the `exact` attribute here */}
          <Route exact path="/animals" render={props => {
                if (this.isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
          <Route exact path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
            }} />
          <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} />
            }} />
          <Route path="/animals/:animalId(\d+)/edit" render={props => {
                return <AnimalEditForm {...props} />
            }} />

          {/* routes for employees */}
          <Route exact path="/employee" render={(props) => {
              if (this.isAuthenticated()) {
                  return <EmployeeList {...props} />
              } else {
                  return <Redirect to="/login" />
              }
          }} />
          <Route exact path="/employee/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
            }} />
          <Route path="/employee/new" render={(props) => {
            return <EmployeeForm {...props} />
            }} />
          <Route path="/employee/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
            }} />

          {/* routes for location */}
          <Route exact path="/location" render={(props) => {
              if (this.isAuthenticated()) {
                  return <LocationList {...props} />
              } else {
                  return <Redirect to="/login" />
              }
          }} />
          <Route exact path="/location/:locationId(\d+)" render={(props) => {
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
            }} />
          <Route path="/location/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
            }} />

          {/* owner routes */}
          <Route exact path="/owner" render={(props) => {
              if (this.isAuthenticated()) {
                  return <OwnerList {...props} />
              } else {
                  return <Redirect to="/login" />
              }
          }} />
          <Route path="/owner/:ownerId(\d+)" render={(props) => {
            return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
            }} />

            {/* login route */}
          <Route path="/login" component={Login} />

        </React.Fragment>
      )
    }
  }

  export default ApplicationViews