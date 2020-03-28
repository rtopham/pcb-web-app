import React, {Component} from 'react'
import {Card, Modal, Button, Form, FormGroup, FormControl, FormLabel} from "react-bootstrap"
import {create} from './api-user.js'
import {validateInputLength, validatePassword, validateConfirmPassword, validateEmail} from '../lib/form-validation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import {LinkContainer} from 'react-router-bootstrap'
import "./Users.css";

class Signup extends Component {
  constructor(props, context) {
    super(props, context);

  this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      show: false,
      error: ''
  }
 
}

validateForm() {
  return (
    validateInputLength(this.state.name,2)==='success'&&
    validateEmail(this.state.email)==='success'&&
    validatePassword(this.state.password)==='success'&&
    validateConfirmPassword(this.state.password,this.state.confirmPassword)==='success'
  );
}  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  clickSubmit = (e) => {
    e.preventDefault()
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({error: '', show: true})
      }
    })
  }

  handleClose=()=> {
    this.setState({ show: false });
  }  

  render() {
    let ErrorCard=''
    if (this.state.error) ErrorCard = (<Card.Footer className="centerthis"><span><FontAwesomeIcon icon={faExclamation}/> {this.state.error}</span></Card.Footer>); else ErrorCard=null
    return (
      <div className="Signup">
      <Card>
        <Card.Header>Sign Up</Card.Header>
      <Form>
      <FormGroup controlId="name" >
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            isValid={validateInputLength(this.state.name,2)==='success'}
            isInvalid={validateInputLength(this.state.name,2)==='error'}
            size="lg"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" >
          <FormLabel>Email</FormLabel>
          <FormControl
            isValid={validateEmail(this.state.email)==='success'}
            isInvalid={validateEmail(this.state.email)==='error'}
            size="lg"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Password</FormLabel>
          <FormControl
            isValid={validatePassword(this.state.password)==='success'}
            isInvalid={validatePassword(this.state.password)==='error'}
            size="lg"          
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" >
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            isValid={validatePassword(this.state.confirmPassword)==='success'}
            isInvalid={validatePassword(this.state.confirmPassword)==='error'}
            size="lg"          
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
          block
          size="lg"
          disabled={!this.validateForm()}
          onClick={this.clickSubmit}>Sign Up</Button>
      </Form>
      {ErrorCard}
      </Card>
      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
         <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>New account successfully created.</h4>
        </Modal.Body>
        <Modal.Footer>
          <LinkContainer to="/signin">
            <Button color="primary" onClick={this.handleClose} autoFocus="autoFocus">
              Sign In
            </Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
      
      </div>
    )
  }
}

export default Signup
