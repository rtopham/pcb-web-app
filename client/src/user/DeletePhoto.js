import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import DeletePhotoModal from './DeletePhotoModal'

class DeletePhoto extends Component {

  state = {
    open: false
  }

  clickButton = () => {
    this.setState({open: true})
  }

  handleRequestClose = () => {
    this.setState({open: false})
  }

handleDelete=()=>{
  this.setState({open:false})
  this.props.deletePhoto()
}

  render() {
 

    if (this.state.open){
      return <DeletePhotoModal handleRequestClose={this.handleRequestClose} handleDelete={this.handleDelete}/>
    }

    else return (
     
      <Button className="upload-photo-buttons" variant="link" onClick={this.clickButton}><FontAwesomeIcon size="2x" icon={faTrash}/> </Button>
      
    )

  }
}

export default DeletePhoto
