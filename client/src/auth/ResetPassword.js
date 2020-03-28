import React, {Component} from 'react'
import {Card, Modal, Button, Form, FormGroup, FormControl, FormLabel} from "react-bootstrap"
import {validatePassword, validateConfirmPassword} from '../lib/form-validation'
import {validateToken, changePassword} from './api-auth.js'
import InvalidResetToken from './InvalidResetToken'
import {LinkContainer} from 'react-router-bootstrap'
import "./Signin.css";

class ResetPassword extends Component {
  constructor({match}) {
    super();

  this.state = {

      password: '',
      confirmPassword: '',
      show: false,
      error: '',
      invalidToken:false,
      user:{}
  }

this.match=match
}

componentDidMount=()=>{

  const user = {
    token: this.match.params.token || undefined,
  }

  validateToken(user).then((data) => {

    if (data.error) {
      this.setState({error: data.error,invalidToken: true})

    } else {

      const now = new Date().getTime()
      const timeDifference= (now-data.tokenTimeStamp)/1000/60

      if(timeDifference<60) this.setState({user:data,invalidToken:false})
      else this.setState({invalidToken:true})

    }
  })

}

  validateForm=()=> {
    return (
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
      token: this.match.params.token || undefined,
      password: this.state.password || undefined
    }

    changePassword(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({show: true})
 
      }
    })
  }

  handleClose=()=> {
    this.setState({ show: false });
  }  

  render() {
    if(this.state.invalidToken) return (<InvalidResetToken/>)
    let ErrorCard=''
    if (this.state.error) ErrorCard = (<Card.Footer className="centerthis"><span className="glyphicon glyphicon-exclamation-sign"></span> <span>{this.state.error}</span></Card.Footer>); else ErrorCard=null
    return (
      <div className="Signup">
      <Card>
        <Card.Header>Reset Password</Card.Header>
      <Form onSubmit={this.clickSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <Form.Text className="text-body">{this.state.user.email}</Form.Text>
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            isValid={validatePassword(this.state.password)==='success'}
            isInvalid={validatePassword(this.state.password)==='error'}
            size="lg"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
           {validatePassword(this.state.password)!=='success'&&<div>Must contain at least: eight characters, one uppercase letter, one lowercase letter and one number. Special characters are allowed.</div>}
        </FormGroup>
        <FormGroup controlId="confirmPassword">
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
          type="submit"
          block
          size="lg"
          disabled={!this.validateForm()}>
          Change Password
          </Button>
      </Form>
      {ErrorCard}
      </Card>
      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
         <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Password Successfully Changed. Please Sign in.</h4>
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

export default ResetPassword
