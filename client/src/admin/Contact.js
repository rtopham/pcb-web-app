import React, {Component} from 'react'
import {Card, Modal, Button, Form, FormGroup, FormControl, FormLabel} from "react-bootstrap"
import {validateInputLength, validateEmail} from '../lib/form-validation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import {sendContactMessage} from './api-admin'
import {LinkContainer} from 'react-router-bootstrap'
import "../user/Users.css"


class Contact extends Component {

  state = {
      name: '', 
      subject:'',
      email: '',
      message:'',
      show: false,
      error: ''
}

  validateForm() {
    return (
      validateInputLength(this.state.name,2)==='success'&&
      validateEmail(this.state.email)==='success'&&
      validateInputLength(this.state.subject,2)==='success'&&
      validateInputLength(this.state.message,2)==='success'
    );
  }  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  
  oldclickSubmit=(e)=>{
    e.preventDefault()
    console.log("Submit")
  }
  
clickSubmit = (e) => {

    e.preventDefault()
    const message = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      subject: this.state.subject || undefined,
      message: this.state.message || undefined
    }

      sendContactMessage(message).then((data) => {

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
        <Card.Header>Contact</Card.Header>
        <Card.Body>
           Use the form below to send us an email.
        </Card.Body>
      <Form onSubmit={this.clickSubmit}>
      <FormGroup controlId="name">
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
        <FormGroup controlId="subject">
          <FormLabel>Subject</FormLabel>
          <FormControl
            isValid={validateInputLength(this.state.name,2)==='success'}
            isInvalid={validateInputLength(this.state.name,2)==='error'}
            size="lg"          
            value={this.state.subject}
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="message">
        <FormLabel>Message</FormLabel>
        <FormControl 
        isValid={validateInputLength(this.state.name,2)==='success'}
        isInvalid={validateInputLength(this.state.name,2)==='error'}
        size="lg"     
        as="textarea"
        rows="8"
        spellCheck
        placeholder="Enter message."
        value={this.state.message}
        onChange={this.handleChange}/>
        </FormGroup>
        <Button
          type="submit"
          block
          size ="lg"
          disabled={!this.validateForm()}
          onClick={this.clickSubmit}>
          Send Message
          </Button>
      </Form>
      {ErrorCard}
     
      </Card>
      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
         <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Message successfully sent.</h4>
        </Modal.Body>
        <Modal.Footer>
          <LinkContainer to="/">
            <Button color="primary" onClick={this.handleClose} autoFocus="autoFocus">
              Ok
            </Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
      
      </div>
    )
  }
}

export default Contact
