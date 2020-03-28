import React, {Component} from 'react'
import {Card, Button,FormGroup} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faExclamation} from '@fortawesome/free-solid-svg-icons'
import {create} from './api-image.js'
import auth from '../auth/auth-helper.js'
import "./Image.css"

class UploadImageForm extends Component {
  state = {
    photo: '',
    error: '',
    user: {}
  }

  componentDidMount = () => {
    this.imageData = new FormData()
    this.setState({user: auth.isAuthenticated().user})
  }
  clickUploadImage = () => {
    const jwt = auth.isAuthenticated()
    create(
      {userId: jwt.user._id},
      {t: jwt.token},
      this.imageData).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({photo: ''})
        this.props.reloadImages()
      }
    })
  }
  handleChange = name => event => {
    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value
    this.imageData.set(name, value)
    this.setState({ [name]: value })
  }
  render() {

    return (<div>
      <Card>
      <Card.Header>
    <Card.Title>Upload New Image to Your Gallery</Card.Title>
            
      </Card.Header>    
      <Card.Body>
        <FormGroup className="NewPhoto">
        <input accept="image/*" onChange={this.handleChange('photo')} id="icon-button-file-2" type="file" />
        <label htmlFor="icon-button-file-2">
        <Button variant="link" className="upload-photo-buttons" as="span">
        <FontAwesomeIcon size="2x" icon={faImage}/>
        </Button>
        
        </label>
  
        
        <span className="NewImageFileName" >{this.state.photo ? this.state.photo.name : ''}</span>

        </FormGroup>
        <FormGroup>
        { this.state.error && (<span>
          <FontAwesomeIcon icon={faExclamation}/>{this.state.error}</span>)
        }
        </FormGroup>
      </Card.Body>
      <Card.Footer>
        <Button color="primary" disabled={this.state.photo===''} onClick={this.clickUploadImage} className="">Upload</Button>
        </Card.Footer>
    </Card>
  </div>)
  }
}

export default UploadImageForm
