import React, {Component} from 'react'
import {Card, Button, Form, FormGroup, FormControl, FormLabel} from "react-bootstrap"
import {validateEmail} from '../lib/form-validation'
import PasswordResetConfirmation from './PasswordResetConfirmation'
import {Link} from 'react-router-dom'
import {resetRequest} from './api-auth.js'
import "./Signin.css";

class PasswordResetRequest extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      emailSent: false
  }


validateForm() {
    return (
      validateEmail(this.state.email)==='success' 
    );
  }

  clickSubmit = (e) => {
   e.preventDefault()
    const user = {
      email: this.state.email || undefined,
    }

    resetRequest(user).then((data) => {

      if (data.error) {
        this.setState({error: data.error})
        console.log(data.error)
      } else {
        this.setState({emailSent:true})
      }
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {

    if(this.state.emailSent) return (<PasswordResetConfirmation email={this.state.email}/>)

  return (

      <div className="Signin">
      <Card>
        <Card.Header>Reset Password</Card.Header>
        <Card.Body>
          Enter the email address associated with your account to receive a password reset email.
          </Card.Body>
      <Form onSubmit={this.clickSubmit}>
        <FormGroup controlId="email">
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
         
        <Button
          block
          type="submit"
          size="lg"
          disabled={!this.validateForm()}>
          Send Email
          </Button>
      </Form>
      <Card.Body>
      <div className="centerthis">
      <Link to="/signin">Cancel</Link>
      <p></p>
      If you forgot your email address, <Link to="/contact">contact us</Link> for assistance.
      </div>
      </Card.Body>
      
      </Card>



                                  
      
</div>
    )
  }
}

export default PasswordResetRequest
