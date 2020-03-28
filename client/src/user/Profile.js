import React, {Component} from 'react'
import {Card, ListGroup, Button, ListGroupItem} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import DeleteUser from './DeleteUser'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import "./Users.css"

class Profile extends Component {
  constructor({match}) {
    super()
    this.containerRef=React.createRef()
    this.state = {
      user:{},
      redirectToSignin: false
    }
    this.match = match
  }
  init = (userId) => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        this.setState({redirectToSignin: true})
      } else {
        this.setState({user: data})
      }
    })
  }
  componentWillReceiveProps = (props) => {
    this.init(props.match.params.userId)
  }
  componentDidMount = () => {
    this.init(this.match.params.userId)
  }
  render() {
//if(!this.state.user._id)return null
    const redirectToSignin = this.state.redirectToSignin
    if (redirectToSignin) {
      return <Redirect to='/signin'/>
    }
    return (
      <div className="globalCore modal-container">
      <Card>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
        <div>
        <ListGroup>
          <ListGroupItem header={this.state.user.name}>{this.state.user.email}</ListGroupItem>
            <ListGroupItem>{"Joined: " + (new Date(this.state.user.created)).toDateString()}</ListGroupItem>
        </ListGroup>
      </div>
      </Card.Body>
      <Card.Footer>
      <div>
        <span className="pull-right">
          {auth.isAuthenticated().user && auth.isAuthenticated().user._id === this.state.user._id &&(<span className="pull-right">
          <LinkContainer to={"/user/edit/" + this.state.user._id}>
          <Button variant="link"><FontAwesomeIcon icon={faEdit}/></Button>
          </LinkContainer>
          <DeleteUser userId={this.state.user._id}/> </span> )
          }</span>
        </div>
        </Card.Footer>
      </Card>
      </div>
    )
  }
}


export default Profile
