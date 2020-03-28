import React, {Component} from 'react'
import {Card, Button,FormGroup} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faExclamation} from '@fortawesome/free-solid-svg-icons'
import DeletePhoto from './DeletePhoto'
import "./Users.css"

class UploadPhoto extends Component {
  state = {
    photo: null,
    error: ''
    
  }

  componentDidMount = () => {
    this.photoData = new FormData()

  }

  handleChange = name => event => {

    const value = name === 'photo'
      ? event.target.files[0]
      : event.target.value

if(value.size>1000000) this.setState({error:"Please select a file less than 1MB"});
      else{   
    this.setState({error:""})

    this.photoData.set(name, value)
    this.setState({ [name]: value })


    let reader=new FileReader()
    reader.onload=(e)=>{
      let photo = e.target.result
 
      this.setState({photo})
      this.props.changePhotoState(photo,value)
    }

    if(event.target.files[0]) reader.readAsDataURL(event.target.files[0])
  }
  }
  
  render() {
let photoUrl=null
if(this.props.photoUrl) photoUrl=this.props.photoUrl
if(this.state.photo) photoUrl = this.state.photo
//

    return (<div>
      <Card hidden={this.props.hidden}>
      <Card.Header>
    <Card.Title>Upload Photo</Card.Title>
            
      </Card.Header>    
      <Card.Body>
        <FormGroup  className="NewPhoto">
        {photoUrl&&this.props.photo ? <img className="PhotoImage" src={photoUrl} alt="None on File"></img>:'   No Photo on File'}
        <input accept="image/*" onChange={this.handleChange('photo')} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file"><Button className="upload-photo-buttons" as="span"><FontAwesomeIcon size="2x" icon={faImage}/></Button></label>
  {/*       <Button className="upload-photo-buttons" variant='link' onClick={this.clickDelete}><FontAwesomeIcon size="2x" icon={faTrash}/></Button> */}
        {photoUrl&&this.props.photo&& <DeletePhoto photoUrl={this.props.photoUrl} deletePhoto={this.props.deletePhoto} changesMade={this.props.changesMade} />}
        {/*<span className="NewPhotoFileName" >{this.state.photo ? this.state.photo.name : ''}</span>*/}

        { this.state.error && (<span className="text-danger upload-photo-error">
          <FontAwesomeIcon icon={faExclamation}/> {this.state.error}</span>)
        }
        </FormGroup>
        <FormGroup>

        </FormGroup>
      </Card.Body>
    </Card>
   &nbsp;
  </div>)
  }
}

export default UploadPhoto
