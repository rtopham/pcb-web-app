import React, {Component} from 'react'
import {Card, Form, Button, FormGroup, FormControl, FormLabel} from "react-bootstrap"
import {validatePassword, validateEmail} from './../lib/form-validation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import auth from './auth-helper'
import {Redirect, Link} from 'react-router-dom'
import {signin} from './api-auth.js'
import "./Signin.css";

class Signin extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false
  }

validateForm=()=> {
    return (
      validateEmail(this.state.email)==='success'&&
      validatePassword(this.state.password)==='success'
    );
  }  

  clickSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    
    signin(user).then((data) => {
 
      if (data.error) {
        this.setState({error: data.error})
      } else {
        auth.authenticate(data, () => {
          this.setState({redirectToReferrer: true})

          
        })
      }
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {

    const {from} = this.props.location.state || {
      from: {
        pathname: '/'
      }
    }
    const {redirectToReferrer} = this.state
    if (redirectToReferrer) {
      return (<Redirect to={from}/>)
    }

    let ErrorCard=''
    if (this.state.error) ErrorCard = (<Card.Footer className="centerthis"><span><FontAwesomeIcon icon={faExclamation}/> {this.state.error}</span></Card.Footer>); else ErrorCard=null

  return (

      <div className="Signin">
      <Card>
        <Card.Header>Sign In</Card.Header>
      <Form onSubmit={this.clickSubmit}>
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
        </FormGroup>
         
          
        <Button
          block
          size="lg"
          type="submit"
          disabled={!this.validateForm()}>
          Sign In
          </Button>
      </Form>
      <div className="centerthis">
      <Link to="/password-reset-request">Lost your password?</Link>
      <p></p>
      </div>
      {ErrorCard}

      </Card>



                                  
      
</div>
    )
  }
}

export default Signin

