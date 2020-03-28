import React, {Component} from 'react'
import {Card, Form, FormGroup, FormControl, FormLabel, Button, ButtonGroup} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faExclamation} from '@fortawesome/free-solid-svg-icons'
import auth from './../auth/auth-helper'
import {read, update} from './api-user.js'
import {Redirect} from 'react-router-dom'
import "./Users.css";
import {validateEmail, validateInputLength, validatePassword, validateConfirmPassword } from '../lib/form-validation'
import UploadPhoto from './UploadPhoto'

class EditProfile extends Component {
  constructor({match}) {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      photo:null,
      photoUrl:null,
      confirmPassword: '',
      redirectToProfile: false,
      changesMade:false,
      error: ''
    }
    this.match = match
  }

  componentDidMount = () => {
    this.userData= new FormData()
    const jwt = auth.isAuthenticated()
    read({
      userId: this.match.params.userId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        const photoUrl = `/api/users/photo/${data._id}?${new Date().getTime()}`
        
        this.setState({name: data.name, email: data.email, photo:data.photo, photoUrl})
        
      }
    })
  }

  changePhotoState=(photo,file)=>{
    this.setState({photo,changesMade:true})
    this.userData.set('photo', file)
    
  }

deletePhoto=()=>{

  this.setState({photo:null, photoUrl:null, changesMade:true})
  this.userData.set('photo', '')
}

  clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    this.userData.set('name',     this.state.name)
    this.userData.set('email',    this.state.email)
    this.userData.set('password', this.state.password)

    update({
      userId: this.match.params.userId
    }, {
      t: jwt.token
    }, this.userData).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
        console.log(data.error)
      } else {
        this.setState({'userId': data._id, 'redirectToProfile': true})
      }
    })
  }

  validateForm() {
    return (
      validateInputLength(this.state.name,2)==='success'&&
      validateEmail(this.state.email)==='success'&&
      validatePassword(this.state.password)==='success'&&
      validateConfirmPassword(this.state.password,this.state.confirmPassword)==='success'
    )
  }  


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value, changesMade:true
    });
  }

  render() {
    if (this.state.redirectToProfile) {
      return (<Redirect to={'/user/' + this.state.userId}/>)
    }
    return (
      <div className="globalCore">
      <Card>
        <Card.Header><ButtonGroup size="sm">Edit Profile</ButtonGroup><LinkContainer to={"/user/"+this.match.params.userId}>
          <ButtonGroup size="sm" className="float-right">
            <Button  variant="link">
              <FontAwesomeIcon icon={faArrowLeft}/>
            </Button>
            </ButtonGroup>
            </LinkContainer>
         </Card.Header>
         <Card.Body>
      <Form>
      <FormGroup controlId="name" >
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            isValid={validateInputLength(this.state.name,2)==='success'}
            isInvalid={validateInputLength(this.state.name,2)==='error'}
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
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" >
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            isValid={validatePassword(this.state.confirmPassword)==='success'&&validateConfirmPassword(this.state.password,this.state.confirmPassword)==='success'}
            isInvalid={validatePassword(this.state.confirmPassword)==='error'|validateConfirmPassword(this.state.password,this.state.confirmPassword)==='error'}          
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        </Form>
        <UploadPhoto changePhotoState={this.changePhotoState} changesMade={this.state.changesMade} photo={this.state.photo} photoUrl={this.state.photoUrl} deletePhoto={this.deletePhoto}/>
        </Card.Body>
        <Card.Footer>
        <Button
          
          
          disabled={!this.validateForm()}
          onClick={this.clickSubmit}>Submit</Button>
          {this.state.changesMade&&<span className="text-danger upload-photo-error">
          <FontAwesomeIcon icon={faExclamation}/> Enter your password and click "Submit" to save changes.</span>}
          </Card.Footer>

      
      </Card>
      </div>
    )
  }
}


export default EditProfile
