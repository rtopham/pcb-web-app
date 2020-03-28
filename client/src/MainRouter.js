import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users.js'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import PasswordResetRequest from './auth/PasswordResetRequest'
import ResetPassword from './auth/ResetPassword'
import Contact from './admin/Contact'
import Menu from './core/Menu'
import Gallery from './image/Gallery'
import EditImage from './image/EditImage'

class MainRouter extends Component {

  render() {
    return (<div>
     <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/contact" component={Contact}/>
        <PrivateRoute path='/gallery/:userId' component ={Gallery}/>
        <PrivateRoute path='/image/:userId/:imageId' component ={EditImage}/>
        <Route path="/password-reset-request" component={PasswordResetRequest}/>
        <Route path="/reset-password/:token" component={ResetPassword}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>

      </Switch>
    </div>)
  }
}

export default MainRouter
